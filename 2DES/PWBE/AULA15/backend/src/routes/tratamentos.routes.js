const express = require('express');
const router = express.Router();

const Tratamento = require("../controllers/tratamentos.controller");

router.post("/tratamentos/create/", Tratamento.create);
router.get("/tratamentos/read", Tratamento.read);
router.put("/tratamentos/update", Tratamento.update);
router.delete("/tratamentos/delete", Tratamento.delete);

module.exports = router;