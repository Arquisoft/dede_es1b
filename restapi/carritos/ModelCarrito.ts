const mongoose=require("mongoose");
const{model,Schema}=mongoose;

const schemaCarrito=new Schema({
    id:Number,
    id_usuario:Number,
    id_producto:Number,

})
schemaCarrito.set('toJSON',{
    transform:(objeto1:any,objeto2:any)=>{
        objeto2.id=objeto1._id
        delete objeto2._id
        delete objeto2.__v
    }
})


export const modeloCarrito=mongoose.model('Carrito',schemaCarrito)