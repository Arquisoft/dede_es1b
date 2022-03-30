const mongoose=require("mongoose");
const{model,Schema}=mongoose;

const schemaCarrito=new Schema({
    id:String,
    id_usuario:String,
    listaProductos:[{
        producto: [{
            id_p: String,
            cantidad:Number
        }]
    }],
    precio:Number,

})
schemaCarrito.set('toJSON',{
    transform:(objeto1:any,objeto2:any)=>{
        objeto2.id=objeto1._id
        delete objeto2._id
        delete objeto2.__v
    }
})


export const modeloCarrito=mongoose.model('Carrito',schemaCarrito)