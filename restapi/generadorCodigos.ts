import{modeloUsuario} from "./usuarios/modeloUsuario";
import {modeloProducto} from "./productos/modeloProducto";
import {modeloPedido} from "./pedidos/ModelPedido";

export async function generarCodigoUsuario():Promise<string>{
    let numero:number=getRandomInt();
    let codigo:string="cl"+numero;
    let usuario=modeloUsuario.findOne({"id":codigo});
    while(!usuario){
        numero=getRandomInt();
        codigo="cl"+numero;
        usuario=modeloUsuario.findOne({"id":codigo})
    }
    return codigo;
}

export async function generarCodigoPedido():Promise<string>{
    let numero:number=getRandomInt();
    let codigo:string="ped"+numero;
    let usuario=modeloPedido.findOne({"id":codigo});
    while(!usuario){
        numero=getRandomInt();
        codigo="ped"+numero;
        usuario=modeloPedido.findOne({"id":codigo})
    }
    return codigo;
}

export async function generarCodigoProducto():Promise<string>{
    let numero:number=getRandomInt();
    let codigo:string="pr"+numero;
    let usuario=modeloProducto.findOne({"id":codigo});
    while(!usuario){
        numero=getRandomInt();
        codigo="pr"+numero;
        usuario=modeloProducto.findOne({"id":codigo})
    }
    return codigo;
}

function getRandomInt() {
    return Math.floor(Math.random() * (3000 - 0)) + 0;
}