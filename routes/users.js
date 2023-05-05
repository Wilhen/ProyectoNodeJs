var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/',usersController.getAll);

router.post('/',usersController.create);

router.post('/login',usersController.validate);

module.exports = router;
