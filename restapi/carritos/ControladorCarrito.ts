import {RequestHandler} from "express";
import{modeloCarrito} from "./ModelCarrito";

export const getCarrito:RequestHandler=async (required,resultado)=>{
    try{
        const carritos=await modeloCarrito.find();
        return resultado.json(carritos);
    }catch (err){
        resultado.json(err);
    }

};