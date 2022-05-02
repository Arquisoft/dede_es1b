const jwt = require('jsonwebtoken')

export const generarToken = (usuario:string)=> {
    return jwt.sign(usuario,process.env.SECRET);

};