const jwt = require('jsonwebtoken')

export const generarToken = (usuario:String)=> {
    return jwt.sign(usuario,process.env.SECRET);

};