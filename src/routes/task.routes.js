
const {Router} = require('express'); // importa la funciones ROUTER desd el modulo de express
const router = Router();


const {getProducts, getCategories, getCategoriesInfo, getProductoInfo, getComentarios, getCarritoProductos, createComentario, guardarRegistroCompras, getRegistroDeCompras, createPublication, getNuevasPublicaciones, getUsers, ingresarUsuario, getUsuariosRegistrados } = require('../controllers/tasks.controller.js'); 

// para que quede mas legible, estas funciones getProducts, getCategories etc.., se generan en tasks.controler.js.  Pero
//perfectamente se pueder generar dentro de la funcion get, luego del path de la ruta.
router.get('/products', getProducts);  
router.get('/categories', getCategories);
router.get('/categories-info', getCategoriesInfo);
router.get('/product-info', getProductoInfo);
router.get('/comments', getComentarios);
router.get('/cart-products', getCarritoProductos);
router.get('/buy-registry',getRegistroDeCompras);
router.get('/new-products', getNuevasPublicaciones)
router.get('/users-data', getUsuariosRegistrados)

router.post('/comments', createComentario);
router.post('/buy-registry',guardarRegistroCompras);
router.post('/new-products', createPublication)
router.post('/users-data', ingresarUsuario)
//se exporta el objeto router importado desde express
module.exports = router;


