import {RequestHandler} from "express";
import{modeloPedido} from "./ModelPedido";
import {modeloUsuario} from "../usuarios/modeloUsuario";
import {generarCodigoCarrito} from "../generadorCodigos";

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


export const crearCarrito:RequestHandler=async (required,resultado)=>{
    try{
        let id_carrito:String =await generarCodigoCarrito();
        let id_usuario:String=required.body.id_usuario;

        let precio:Number=0;
        let newCarrito=new modeloCarrito({
            'id':id_carrito,
            'id_usuario':id_usuario,
            'listaProductos':[],
            'precio':precio
        });
        await  newCarrito.save();
        return resultado.sendStatus(200)

    }catch (err){
        resultado.json(err);
    }

};
