//archibo principal del servidor
//configurar express

const express = require('express');
const cors = require('cors');//permitir conectar el
const helmet = require('helmet');// seguridad 

// inicializamos la app
const app = express();

//rutas 
const routes = require('./routes');
app.use('/api',routes);


//middleware para leer json(APIS)
app.use(express.json());
app.use(cors());// Seguridad básica
app.use(helmet());//seguridad

//rutas de prueba
app.get('/', (req,res)=>{
    res.send("API Funcionando");
});

//para usar en el server.js
module.exports = app;
