import {RequestHandler} from "express";
import{modeloUsuario} from "./ModelUsuario";

export const getUsuarios:RequestHandler=async (required,resultado)=>{
    try{
        const usuarios=await modeloUsuario.find();
        return resultado.json(usuarios);
    }catch (err){
        resultado.json(err);
    }

};