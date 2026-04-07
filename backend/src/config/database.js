// Conexión a base de datos
//import sequelize

const {sequelize}=require('sequelize');

//Crear conexiones a mysql
const sequelize = new Sequelize('taskmanager','root','',
    {
    host:'localhost',
    dialect:'mysql'
    });
//probar conexion 
sequelize.authenticate()
.then(()=>console.log('Conexion exitosa'))
.catch(err=>console.error('Fallo la conexion',err));
module.exports = sequelize;