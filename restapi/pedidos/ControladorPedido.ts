import {RequestHandler} from "express";
import{modeloPedido} from "./ModelPedido";
import {modeloUsuario} from "../usuarios/modeloUsuario";
import {generarCodigoCarrito, generarCodigoPedido} from "../generadorCodigos";

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
        return resultado.json(pedidos);
    }catch (err){
        resultado.json(err);
    }

};


export const crearPedido:RequestHandler=async (required,resultado)=>{
    try{
        let id_pedido:String =await generarCodigoPedido();
        let id_usuario:String=required.body.id_usuario;
        //let productos:=required.body.productos;

        let precio:Number=required.body.precio;
        let direccion:String=required.body.direcc;
        let newPedido=new modeloPedido({
            'id':id_pedido,
            'id_usuario':id_usuario,
            'listaProductos':[],
            'precioTotal':precio,
            'direccionAsignada':direccion
        });
        newPedido.listaProductos=required.body.productosPedido;
        await  newPedido.save();
        return resultado.sendStatus(200)

    }catch (err){
        resultado.json(err);
    }

};
