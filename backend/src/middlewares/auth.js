const jwt= require('jsonwebtoken');

//Middleware que protege rutas
const verificarToken = (req,res,next)=>{
    // obtener token del header
    const token = req.header('Authorization');

    if(!token){
        return res.status(401).json(
            {mesaje:'Acceso denegado'});
    }
    try{
        //verificar token
        const decoded = jwt.verify(token,'secreto');
        req.usuario = decoded;
        next();
    }catch(error){
        return res.status(400).json(
            {mesaje:'Token invalido'});
    }
};

module.exports = verificarToken;