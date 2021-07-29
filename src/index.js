const app = require('./app'); // llama al servidor
const {createConection, createConectionUsers} = require('./database'); // llama a la base de datos
const {createConectionImg} = require('./database'); // llama a la base de datos

// INICIALIZA LAS BASES DE DATOS
createConection(); 
createConectionImg();
createConectionUsers();

app.listen(4000);// inicia el servidor

console.log('Server on port', 4000);