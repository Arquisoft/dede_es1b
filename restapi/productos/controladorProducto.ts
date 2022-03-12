import { RequestHandler } from "express";
import { modeloProducto } from "./modeloProducto";

export const getProductos: RequestHandler = async (req, res) => {
    try{
        const productos=await modeloProducto.find();
        return res.json(productos);}
        catch(error)
        {
            res.json(error);
        }

    

};