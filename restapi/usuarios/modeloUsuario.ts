const mongoose=require("mongoose");
const{model,Schema}=mongoose;

const schemaUsuario=new Schema({
    id:Number,
    name:String,
    surname:String,
    usuario:String,
    contrasenia:String,
    correo:String,
    tipo:String,
    listaProductos:[{
        id_p: String
    }],

})
schemaUsuario.set('toJSON',{
    transform:(objeto1:any,objeto2:any)=>{
        objeto2.id=objeto2._id
        delete objeto2._id
        delete objeto2.__v
    }
})


export const modeloUsuario=mongoose.model('Usuarios',schemaUsuario)