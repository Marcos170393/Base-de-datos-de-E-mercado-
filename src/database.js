//lowdb es un framework que genera una base de datos, y aloja toda la informacion en un archivo json, el cual tambien se puede editar.
const LOWDB = require('lowdb');
const FILE_ASYNC = require('lowdb/adapters/FileAsync');
// se llama a este motedo FileAsync ya que el proyecto simula una API REST y tendra multiples solicitudes 
//simultanes por lo tanto es mejor que sean solicitudes asincronas para que puedas responderse de forma simultanea

let db;

async function createConection(){
    const adapter =  new FILE_ASYNC('db.json');//genera el archivo donde se van a almacenar los datos.
    db = await LOWDB(adapter);// lowDb lo crea.

    // aqui en defaults se definen todas las propiedad que tendra ese archivo json.
    db.defaults(
         { productos: [], categorias:[] , categoriaInfo: {} , productoInfo: {} , comentarios: [] , carritoProductos: {}, productosComprados:[]}
        ).write(); // con write modificamos el archivo.
}

// esto se hace para poder accedor a esta variable db, desde otros documentos.
const getConection = () => db;

module.exports = {
    createConection,
    getConection
}