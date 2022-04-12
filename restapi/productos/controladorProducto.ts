import { RequestHandler } from "express";
import { IntegerType } from "mongodb";
import { generarCodigoProducto } from "../generadorCodigos";
import { modeloProducto } from "./modeloProducto";


export const getProductos: RequestHandler = async (req, res) => {
    try{
        const productos=await modeloProducto.find({});
        return res.json(productos);}
        catch(error)
        {
            res.json(error);
        }
};

export const borrarProducto:RequestHandler=async (required,resultado)=>{
    try{
        let id_producto:String=required.body.id;
        //console.log(id_producto)

        const producto=await modeloProducto.deleteOne({"_id":id_producto});
        if(producto){
            return resultado.status(200).json();
        }else{
            return resultado.status(404).json();
        }
    }catch (err){
        resultado.json(err);
    }

};

export const añadirProducto:RequestHandler=async (required,resultado)=>{
    try{
        let name:String=required.body.nombre;
        let precio:String=required.body.precio;
        let descripcion:String=required.body.descripcion;
        let tipo:String=required.body.tipo;
        let imagen:String=required.body.imagen;
        let id:String=await generarCodigoProducto();

       
        let newProduct=new modeloProducto({
                'id':id,
                'name':name,
                'precio':precio,
                'descripcion':descripcion,
                'tipo':tipo,
                'imagen':imagen,
                
        });
        await newProduct.save();


        return resultado.sendStatus(200);

    }catch (err){
        resultado.json(err);
    }

};

export const getProductosPorCategoria: RequestHandler = async (req, res) => {
    try{
        let categ:String=req.body.categoria;
        const productos=await modeloProducto.find({'tipo':categ});
        return res.json(productos);}
    catch(error)
    {
        res.json(error);
    }
    return res.sendStatus(200);

};