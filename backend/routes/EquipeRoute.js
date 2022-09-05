const EquipeController = require("../controllers/EquipeController");
var router = require("express").Router();

router.get("/equipes", EquipeController.get);
router.post("/equipe", EquipeController.post);
router.put("/equipe", EquipeController.put);
router.get("/equipe/deletar/:id", EquipeController.delete);
module.exports = router;
