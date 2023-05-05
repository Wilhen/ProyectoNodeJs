var express = require('express');
var router = express.Router();
const productosController = require("../controllers/productosController")

router.get('/',productosController.getAll);
router.get('/destacados',productosController.getAllDestacados);
router.get('/:id',productosController.getById);
//crear
router.post('/',(req,res,next)=>req.app.verifyToken(req,res,next),productosController.create);
//actualizar
router.put('/:id',productosController.update);
//eliminar
router.delete('/:id',productosController.delete);

module.exports = router;
