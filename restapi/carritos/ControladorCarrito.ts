import {RequestHandler} from "express";
import{modeloCarrito} from "./ModelCarrito";
import {generarCodigoCarrito} from "../generadorCodigos";

export const getCarrito:RequestHandler=async (required,resultado)=>{
    try{
        const carritos=await modeloCarrito.find();
        return resultado.json(carritos);
    }catch (err){
        resultado.json(err);
    }

};

export const añadirProductoCarrito:RequestHandler=async (required,resultado)=>{
    try{
        let id_carrito:string=required.body.id_carrito;
        let id_producto:string=required.body.id_producto;
        let cantidad:number=required.body.cantidad;
        const carritoActual=await modeloCarrito.find({"id":id_carrito});
        carritoActual.listaProductosCarrito.push([id_producto,cantidad]);
        await carritoActual.save();
        return resultado.sendStatus(200);

    }catch (err){
        resultado.json(err);
    }

};

export const crearCarrito:RequestHandler=async (required,resultado)=>{
    try{
        let id_carrito:string =await generarCodigoCarrito();
        let id_usuario:string=required.body.id_usuario;

        let precio:number=0;
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
