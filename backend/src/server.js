//src/server.js

//import la app

const app = require('./app');

//defino el puerto
const PORT = 3000;

//levantar el servidor 
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto 
        http://localhost:${PORT}`);
});
