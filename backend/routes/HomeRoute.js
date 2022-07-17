const HomeController = require('../controllers/HomeController');
var router = require('express').Router();

router.get('/', HomeController.get);
router.get('/home', HomeController.get);
router.get('/index', HomeController.get);

module.exports = router;