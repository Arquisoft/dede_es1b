const mongoose=require("mongoose");
const{model,Schema}=mongoose;

const schemaPedido=new Schema({
    id:String,
    id_usuario:String,
    listaProductos:[],
    direccionAsignada:String,
    precioTotal:Number,
    estado:String,

})
schemaPedido.set('toJSON',{
    transform:(objeto1:any,objeto2:any)=>{
        objeto2.id=objeto1._id
        delete objeto2._id
        delete objeto2.__v
    }
})


export const modeloPedido=mongoose.model('Pedidos',schemaPedido)