const app = require('./app'); // llama al servidor
const {createConection} = require('./database'); // llama a la base de datos


createConection(); // inicia la base de datos
app.listen(4000);// inicia el servidor

console.log('Server on port', 4000);