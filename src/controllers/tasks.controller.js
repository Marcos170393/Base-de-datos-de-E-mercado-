const { getConection } = require('../database');
const { v4 } = require('uuid')

//..........
    //METODOS GET
//.........
const getProducts = (req, res) => {
    const productsArray = getConection().get('productos').value();
    res.json(productsArray);
};

const getCategories = (req, res) => {
    const categoriesArray = getConection().get('categorias').value();
    res.json(categoriesArray);
}

const getCategoriesInfo = (req, res) => {
    const categoriesInfoArray = getConection().get('categoriaInfo');
    res.json(categoriesInfoArray);
}

const getProductoInfo = (req, res) => {
    const productoInfo = getConection().get('productoInfo');
    res.json(productoInfo);
}

const getComentarios = (req, res) => {
    const comentarios = getConection().get('comentarios');
    res.json(comentarios);
}

const getCarritoProductos = (req, res) => {
    const carrito = getConection().get('carritoProductos');
    res.json(carrito);
}

const getRegistroDeCompras = (req, res) => {
    const registro = getConection().get('productosComprados');
    res.json(registro)
}
//..........
    //FIN METODOS GET
//.........

//..........
    //METODOS POST
//.........

const createComentario = (req, res) => {
    const newTask = {
        id: v4(), 
        score: req.body.score,
        description: req.body.description,
        user: req.body.user,
        dateTime: req.body.dateTime
    };
    getConection().get('comentarios').push(newTask).write();
    console.log(newTask);
    res.send(newTask);
}

const guardarRegistroCompras = (req, res) => {
    const newTask = {
        id: req.body.id,
        img: req.body.src,
        name: req.body.name,
        cost: req.body.unitCost,
        count: req.body.count
    };
    getConection().get('productosComprados').push(newTask).write();
    console.log(newTask);
    res.send(newTask);
}
//..........
    //METODOS POST
//.........



module.exports = {
    getCategories,
    getProducts,
    getCategoriesInfo,
    getProductoInfo,
    getComentarios,
    getCarritoProductos,
    getRegistroDeCompras,
    createComentario,
    guardarRegistroCompras
    
}