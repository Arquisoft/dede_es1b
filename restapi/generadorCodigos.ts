import{modeloUsuario} from "./usuarios/modeloUsuario";
import {modeloProducto} from "./productos/modeloProducto";
import {modeloCarrito} from "./carritos/ModelCarrito";
export async function generarCodigoUsuario():Promise<String>{
    let numero:Number=Math.random() * (3000 - 0) + 0;
    let codigo:String="cl"+numero;
    let usuario=modeloUsuario.findOne({"id":codigo});
    while(usuario){
        numero=Math.random() * (3000 - 0) + 0;
        codigo="cl"+numero;
        usuario=modeloUsuario.findOne({"id":codigo})
    }
    return codigo;
}
export async function generarCodigoCarrito():Promise<String>{
    let numero:Number=Math.random() * (3000 - 0) + 0;
    let codigo:String="car"+numero;
    let usuario=modeloCarrito.findOne({"id":codigo});
    while(usuario){
        numero=Math.random() * (3000 - 0) + 0;
        codigo="car"+numero;
        usuario=modeloCarrito.findOne({"id":codigo})
    }
    return codigo;
}
export async function generarCodigoProducto():Promise<String>{
    let numero:Number=Math.random() * (3000 - 0) + 0;
    let codigo:String="pr"+numero;
    let usuario=modeloProducto.findOne({"id":codigo});
    while(usuario){
        numero=Math.random() * (3000 - 0) + 0;
        codigo="pr"+numero;
        usuario=modeloProducto.findOne({"id":codigo})
    }
    return codigo;
}