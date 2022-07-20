const EquipeController = require("../controllers/EquipeController");
var router = require("express").Router();

router.get("/equipes", EquipeController.get);
router.post("/equipe", EquipeController.post);
router.delete("/equipe/:nome", EquipeController.delete);
module.exports = router;
