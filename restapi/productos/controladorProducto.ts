import { RequestHandler } from "express";
import { generarCodigoProducto } from "../generadorCodigos";
import { modeloProducto } from "./modeloProducto";


export const getProductos: RequestHandler = async (req, res) => {
    try{
        var productos=await modeloProducto.find({});
        return res.json(productos);
    }
        catch(error)
        {
            res.json(error);
        }
};

export const getProductoPorID: RequestHandler = async (req, res) => {
    try{
        let id_producto:string=req.body.id;
        var producto=await modeloProducto.findOne({'_id':id_producto});
        return res.json(producto);
    }
        catch(error)
        {
            res.json(error);
        }
};


export const actualizarProducto: RequestHandler = async (required, res) => {
    try{
        let id_producto:string=required.body.id;

        let name:string=required.body.nombre;
        let precio:string=required.body.precio;
        let descripcion:string=required.body.descripcion;
        let tipo:string=required.body.tipo;
        let imagen:string=required.body.imagen;
        let estado:boolean=required.body.estado;

        const producto=await modeloProducto.update({ "_id": id_producto }, { "name": name,"precio": precio,"descripcion": descripcion,
        "tipo": tipo,"imagen": imagen , "estado": estado });

    }catch (err){
        res.json(err);
    }

};


export const getProductosActivos: RequestHandler = async (req, res) => {
    try{
        console.log("entro");
        var productos=await modeloProducto.find({'estado':true});
        return res.json(productos);
    }
        catch(error)
        {
            res.json(error);
        }
};

export const getProductosByName: RequestHandler = async (required, resultado) => {
    try{
        let nombre:string=required.body.nombre;
        var producto=await modeloProducto.findOne({name:nombre});
        if(producto){
            resultado.status(200).json(producto);
        }else{
            resultado.status(404).json();
        }
    }catch (err){
        resultado.json(err);
    }
};

export const getCategorias: RequestHandler = async (req, res) => {
    try{
        var categorias=await modeloProducto.find().select('tipo');
        return res.json(categorias);}
        catch(error)
        {
            res.json(error);
        }
};


export const borrarProducto:RequestHandler=async (required,resultado)=>{
    try{
        let id_producto:string=required.body.id;
        
        const producto=await modeloProducto.update({ "_id": id_producto }, { "estado": false });

        if(producto){
            return resultado.status(200).json();
        }else{
            return resultado.status(404).json();
        }
    }catch (err){
        resultado.json(err);
    }

};

export const reactivarProducto:RequestHandler=async (required,resultado)=>{
    try{
        let id_producto:string=required.body.id;
        //console.log(id_producto)
        
        const producto=await modeloProducto.update({ "_id": id_producto }, { "estado": true });
        if(producto){
            return resultado.status(200).json();
        }else{
            return resultado.status(404).json();
        }
    }catch (err){
        resultado.json(err);
    }

};

export const incrementarVentasProducto:RequestHandler=async (required,resultado)=>{
    try{
        let id_producto:string=required.body.id;
        let cantidadVendida:number =required.body.cantidad;

        const producto=await modeloProducto.updateOne({ "_id": id_producto }, { "nventas": cantidadVendida });
        if(producto){
            return resultado.status(200).json();
        }else{
            return resultado.status(404).json();
        }
    }catch (err){
        resultado.json(err);
    }

};

export const getNVentas:RequestHandler=async (required,resultado)=>{
    try{
        let id_producto:string=required.body.id;

        var ventas=await modeloProducto.find({ "_id": id_producto }).select('nventas');
        console.log(ventas);
        return resultado.json(ventas);}
        catch(error)
        {
            resultado.json(error);
        }

};

export const añadirProducto:RequestHandler=async (required,resultado)=>{
    try{
        let name:string=required.body.nombre;
        let precio:string=required.body.precio;
        let descripcion:string=required.body.descripcion;
        let tipo:string=required.body.tipo;
        let imagen:string=required.body.imagen;
        let id:string=await generarCodigoProducto();
        let estado:boolean=true;
        let nventas=0;

       
        let newProduct=new modeloProducto({
                'id':id,
                'name':name,
                'precio':precio,
                'descripcion':descripcion,
                'tipo':tipo,
                'imagen':imagen,
                'nventas':nventas,
                'estado':estado
        });
        await newProduct.save();


        return resultado.sendStatus(200);

    }catch (err){
        resultado.json(err);
    }

};

export const getProductosPorCategoria: RequestHandler = async (req, res) => {
    try{
        let categ:string=req.body.categoria;
        var productos=await modeloProducto.find({tipo:categ,estado:true});
        return res.json(productos);}
    catch(error)
    {
        res.json(error);
    }
    return res.sendStatus(200);

};