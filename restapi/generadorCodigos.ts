import{modeloUsuario} from "./usuarios/modeloUsuario";
import {modeloProducto} from "./productos/modeloProducto";
import {modeloCarrito} from "./carritos/ModelCarrito";
import {Int32} from "mongodb";
import {modeloPedido} from "./pedidos/ModelPedido";

export async function generarCodigoUsuario():Promise<String>{
    let numero:Number=getRandomInt();
    let codigo:String="cl"+numero;
    let usuario=modeloUsuario.findOne({"id":codigo});
    while(!usuario){
        numero=getRandomInt();
        codigo="cl"+numero;
        usuario=modeloUsuario.findOne({"id":codigo})
    }
    return codigo;
}

export async function generarCodigoCarrito():Promise<String>{
    let numero:Number=getRandomInt();
    let codigo:String="car"+numero;
    let usuario=modeloCarrito.findOne({"id":codigo});
    while(!usuario){
        numero=getRandomInt();
        codigo="car"+numero;
        usuario=modeloCarrito.findOne({"id":codigo})
    }
    return codigo;
}

export async function generarCodigoPedido():Promise<String>{
    let numero:Number=getRandomInt();
    let codigo:String="ped"+numero;
    let usuario=modeloPedido.findOne({"id":codigo});
    while(!usuario){
        numero=getRandomInt();
        codigo="ped"+numero;
        usuario=modeloPedido.findOne({"id":codigo})
    }
    return codigo;
}

export async function generarCodigoProducto():Promise<String>{
    let numero:Number=getRandomInt();
    let codigo:String="pr"+numero;
    let usuario=modeloProducto.findOne({"id":codigo});
    while(!usuario){
        numero=getRandomInt();
        codigo="pr"+numero;
        usuario=modeloProducto.findOne({"id":codigo})
    }
    return codigo;
}

function getRandomInt() {
    return Math.floor(Math.random() * (3000 - 0)) + 0;
}