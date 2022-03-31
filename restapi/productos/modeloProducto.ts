const mongoose=require("mongoose");
const{model,Schema}=mongoose;

const producto = new Schema({
    id: Number,
    name:String,
    precio:Number,
    descripcion:String,
    tipo:String ,
    imagen:String,


})

producto.set('toJSON',{
    transform: (objeto1:any,objeto2:any)=>{
        objeto2.id = objeto2._id
        delete objeto2._id
        delete objeto2.__v

    }

})





export const modeloProducto = mongoose.model('Productos', producto)