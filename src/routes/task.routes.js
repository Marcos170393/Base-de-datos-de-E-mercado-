
const {Router} = require('express'); // importa la funciones ROUTER desd el modulo de express
const router = Router();


const { createPrueba, getProducts, getCategories, getCategoriesInfo, getProductoInfo, getComentarios, getCarritoProductos, createComentario, guardarRegistroCompras, getRegistroDeCompras } = require('../controllers/tasks.controller.js'); 

// para que quede mas legible, estas funciones getProducts, getCategories etc.., se generan en tasks.controler.js.  Pero
//perfectamente se pueder generar dentro de la funcion get, luego del path de la ruta.
router.get('/products', getProducts);  
router.get('/categories', getCategories);
router.get('/categories-info', getCategoriesInfo);
router.get('/product-info', getProductoInfo);
router.get('/comments', getComentarios);
router.get('/cart-products', getCarritoProductos);
router.get('/buy-registry',getRegistroDeCompras);

router.post('/comments', createComentario);
router.post('/buy-registry',guardarRegistroCompras);

//se exporta el objeto importado desde express
module.exports = router;


