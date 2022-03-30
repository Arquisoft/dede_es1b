const jwt = require('jsonwebtoken')

export const generarToken = (email:String)=> {
    return jwt.sign({email},process.env.SECRET);
};