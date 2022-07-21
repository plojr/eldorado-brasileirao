const PartidaController = require("../controllers/PartidaController")
var router = require("express").Router();

router.get("/partidas", PartidaController.get);

module.exports = router;