import {RequestHandler} from "express";
import{modeloPedido} from "./ModelPedido";
import {modeloUsuario} from "../usuarios/modeloUsuario";
import {generarCodigoCarrito, generarCodigoPedido} from "../generadorCodigos";
//Coordenadas nuestra tienda
const latitudTienda=43.33972222222222;
const longitudTienda=-5.335555555555556;
const nodeGeocoder=require('node-geocoder');
const options={
    provider:'openstreetmap'
};
const geo=nodeGeocoder(options);


export const getPedidos:RequestHandler=async (required,resultado)=>{
    try{
        const pedidos=await modeloPedido.find();
        return resultado.json(pedidos);
    }catch (err){
        resultado.json(err);
    }

};

export const getPedidosByUsuario:RequestHandler=async (required,resultado)=>{
    try{
        let usuario_id=required.body.user_id;
        const pedidos=await modeloPedido.find({id:usuario_id});
        console.log(usuario_id);
        return resultado.json(pedidos);
    }catch (err){
        resultado.json(err);
    }

};


export const crearPedido:RequestHandler=async (required,resultado)=>{
    try{
        let id_pedido:String =await generarCodigoPedido();
        let id_usuario:String=required.body.id_usuario;
        let productos=required.body.productos;


        let precio:Number=required.body.precio;
        let direccion:String=required.body.direcc;

        let newPedido=new modeloPedido({
            'id':id_pedido,
            'id_usuario':id_usuario,
            'listaProductos':productos,
            'precioTotal':precio,
            'direccionAsignada':direccion,
            'estado':"Pendiente"
        });
        await  newPedido.save();
        console.log("Añadido pedido");
        return resultado.sendStatus(200)


    }catch (err){
        resultado.json(err);
    }

};
function convertidorRadianes(numero:number){
    return numero*Math.PI / 180;
}

export const calcularGastosEnvio:RequestHandler=async (required,resultado)=>{
    let costes=0;

    let direccion:String=required.body.direcc;//Esto sacarlo de los pods
    const cordenadas=await geo.geocode(direccion);
    let coordcadena=JSON.stringify(cordenadas);
    let coordJson=JSON.parse(coordcadena);
    let latitud=coordJson[0].latitude;
    let longitud=coordJson[0].longitude;
    let diferencialat=convertidorRadianes(latitud-latitudTienda);
    let diferencialong=convertidorRadianes(longitud-longitudTienda);
    //Usamos la formula de Havesine
    let radioTierra=6378;
    let a=Math.sin(diferencialat/2)*Math.sin(diferencialat/2)
        +Math.cos(convertidorRadianes(latitudTienda))* Math.cos(convertidorRadianes(latitud))*Math.sin(diferencialong/2)*Math.sin(diferencialong/2)
    let c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
    let distanciaKm=radioTierra*c;
    let precioKm=0.33;
    costes=Number.parseFloat((distanciaKm*precioKm/10).toFixed(2));
    resultado.send(costes.toString());
};
