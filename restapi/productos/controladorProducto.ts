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