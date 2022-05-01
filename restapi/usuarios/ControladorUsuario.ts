import {RequestHandler} from "express";
import{modeloUsuario} from "./modeloUsuario";
import {DeleteResult} from "mongodb";
import {generarCodigoUsuario} from "../generadorCodigos";
import{generarToken}from "./GenerarToken"


export const getUsuarios:RequestHandler=async (required,resultado)=>{
    try{
        const usuarios=await modeloUsuario.find({});
        return resultado.json(usuarios);
    }catch (err){
        resultado.json(err);
    }

};

export const getIdUserByWebId:RequestHandler=async (required,resultado)=>{
    try{
        let webid_user:String=required.body.webid;
        console.log("webid usuario  ", webid_user);
        const id:string=await modeloUsuario.findOne({"_webid":webid_user}).select("id");
        console.log(id);
        return resultado.json(JSON.stringify({"id":id}));
    }catch (err){
        resultado.json(err);
    }

};

export const borrarUsuario:RequestHandler=async (required,resultado)=>{
    try{
        let id_user:String=required.body.id;
        console.log(id_user);
        const usuario=await modeloUsuario.deleteOne({"_id":id_user});
        if(usuario){
            return resultado.status(200).json();
        }else{
            return resultado.status(404).json();
        }
    }catch (err){
        resultado.json(err);
    }

};



export const inicioSesion:RequestHandler=async (required,resultado)=>{
    try{

        let webid:String=required.body.webid;
        console.log("lo que llega a la consulta   "+webid);

        const usuario=await modeloUsuario.findOne({"webid":webid});

        console.log(usuario);

        if(usuario!=null){
            return resultado.sendStatus(200).json();
        }else{
            //insertar usuario y generar un id.
            try{
                let webid:String=required.body.webid;
                let id:String=await generarCodigoUsuario();
                let listaProductos:string[]=[];
                let newUser=new modeloUsuario({
                        'id':id,
                        'webid':webid,
                        'listaProductos':listaProductos
                });
                await newUser.save();

                // let obj = JSON.stringify({rol:usuario.rol});

                return resultado.sendStatus(200).json();

            }catch (err){
                resultado.json(err);
            }
        }
    }catch (err){
        resultado.json(err);
    }

};



export const añadirUsuario:RequestHandler=async (required,resultado)=>{
    try{
        let webid:String=required.body.webid;
        let id:String=await generarCodigoUsuario();
        let listaProductos:string[]=[];
        let newUser=new modeloUsuario({
                'id':id,
                'webid':webid,
                'listaProductos':listaProductos
        });
        await newUser.save();


        return resultado.sendStatus(200);

    }catch (err){
        resultado.json(err);
    }

};