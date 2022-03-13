import {RequestHandler} from "express";
import{modeloUsuario} from "./modeloUsuario";

export const getUsuarios:RequestHandler=async (required,resultado)=>{
    try{
        const usuarios=await modeloUsuario.find();
        return resultado.json(usuarios);
    }catch (err){
        resultado.json(err);
    }

};

export const checkUsuario:RequestHandler=async (required,resultado)=>{
    try{
        const usuario=await modeloUsuario.findOne({usuario:required.params.usuario});
        if(usuario){
            return resultado.json(usuario);
        }else{
            return resultado.status(200).json();
        }
    }catch (err){
        resultado.json(err);
    }

};
export const añadirUsuario:RequestHandler=async (required,resultado)=>{
    try{
        let nombre:String=required.body.nombre;
        let apellidos:String=required.body.apellidos;
        let usuario1:String=required.body.usuario;
        let contraseña1:String=required.body.contraseña;
        let correo1:String=required.body.correo;
        let newUser=new modeloUsuario({
                'name':nombre,
                'surname':apellidos,
                'usuario':usuario1,
                'contrasenia':contraseña1,
                'correo':correo1
        });
        await newUser.save();
        return resultado.sendStatus(200);

    }catch (err){
        resultado.json(err);
    }

};