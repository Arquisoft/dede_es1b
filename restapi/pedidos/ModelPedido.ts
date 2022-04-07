const mongoose=require("mongoose");
const{model,Schema}=mongoose;

const schemaPedido=new Schema({
    id:String,
    id_usuario:String,
    listaProductos:[{
        producto: [{
            id_p: String,
            cantidad:Number
        }]
    }],
    direccionAsignada:String,
    precioTotal:Number,

})
schemaPedido.set('toJSON',{
    transform:(objeto1:any,objeto2:any)=>{
        objeto2.id=objeto1._id
        delete objeto2._id
        delete objeto2.__v
    }
})


export const modeloPedido=mongoose.model('Pedido',schemaPedido)