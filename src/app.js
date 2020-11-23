const express = require('express');
const bodyParser = require('body-parser');
// morgan se encarga de mostrar por consola todas las peticiones que van llegando al 
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//middlewares
app.use(morgan('dev')); // indica que se va a ejecutar morgan desde el comando dev (npm run dev)
app.use(express.json());// se usa el metodo json de express para que pueda interpretar formato json
app.use(cors());
app.use(bodyParser.json({limit: '100mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}))

// routes AQUI SE DEFINEN LAS RUTAS PARA RECIBIR SOLICITUDES 
// Y PODER ENVIAR LA INFORMACION DESDE LA BASE DE DATOS db.json
app.use(require('./routes/task.routes'));
module.exports = app;

