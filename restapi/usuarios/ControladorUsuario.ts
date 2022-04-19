import {RequestHandler} from "express";
import{modeloUsuario} from "./modeloUsuario";
import {DeleteResult} from "mongodb";
import {generarCodigoUsuario} from "../generadorCodigos";
import{generarToken}from "./GenerarToken"


export const getUsuarios:RequestHandler=async (required,resultado)=>{
    try{
        const usuarios=await modeloUsuario.find({"tipo":'usuario'});
        return resultado.json(usuarios);
    }catch (err){
        resultado.json(err);
    }

};

export const borrarUsuario:RequestHandler=async (required,resultado)=>{
    try{
        let id_user:String=required.body.id;
        console.log(id_user);
        const usuario=await modeloUsuario.update({"_id":id_user},{ "estado": false });
        if(usuario){
            return resultado.status(200).json();
        }else{
            return resultado.status(404).json();
        }
    }catch (err){
        resultado.json(err);
    }

};

export const reactivarUsuario:RequestHandler=async (required,resultado)=>{
    try{
        let id_user:String=required.body.id;
        const usuario=await modeloUsuario.update({"_id":id_user},{ "estado": true });
        if(usuario){
            return resultado.status(200).json();
        }else{
            return resultado.status(404).json();
        }
    }catch (err){
        resultado.json(err);
    }

};

export const checkUsuario:RequestHandler=async (required,resultado)=>{
    try{
        let usuario1:String=required.body.usuario;
        let contrasenia1:String=required.body.contraseña;
        const usuario=await modeloUsuario.findOne({usuario:usuario1,contrasenia:contrasenia1});
        if(usuario){
            let obj = JSON.stringify({token:generarToken(required.body.usuario), tipoUser: usuario.tipo})
            resultado.status(200).json(obj);
        }else{
            resultado.status(404).json();
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
        let tipo:String="usuario";
        let id:String=await generarCodigoUsuario();
        let listaProductos:string[]=[];
        let newUser=new modeloUsuario({
                'id':id,
                'name':nombre,
                'surname':apellidos,
                'usuario':usuario1,
                'contrasenia':contraseña1,
                'correo':correo1,
                'tipo':tipo,
                'listaProductos':listaProductos,
                "estado":true

        });
        await newUser.save();


        return resultado.sendStatus(200);

    }catch (err){
        resultado.json(err);
    }

};