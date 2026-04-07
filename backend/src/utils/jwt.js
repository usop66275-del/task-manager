const jwt = require('jsonwebtoken');
const { User } = require('../models');

//
const generarToken = (user)=>{
    return jwt.sing(
        {
            id:user.id //payload(Datos dentro de token)
        },
        "secreto",//clave Secreta
        {
            experesIn:'1h',//Duración
        }
    )
}
module.exports = generarToken;