import { RequestHandler } from "express";
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
        let id_producto:String=required.body.producto_id;
        const producto=await modeloProducto.delete({"id":id_producto});
        if(producto){
            return resultado.status(200).json();
        }else{
            return resultado.status(404).json();
        }
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