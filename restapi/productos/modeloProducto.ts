const mongoose=require("mongoose");
const{model,Schema}=mongoose;

const schemaProducto = new Schema({
    id: String,
    name:String,
    precio:Number,
    descripcion:String,
    tipo:String ,
    imagen:String,
    nventas:Number,
    estado:Boolean
})


schemaProducto.set('toJSON',{
    transform: (objeto1:any,objeto2:any)=>{
        objeto2.id = objeto2._id
        delete objeto2._id
        delete objeto2.__v

    }

})

export const modeloProducto = mongoose.model('Productos', schemaProducto)