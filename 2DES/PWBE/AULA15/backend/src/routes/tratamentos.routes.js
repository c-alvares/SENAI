const express = require('express');
const router = express.Router();

const Tratamento = require("../controllers/tratamentos.controller");

router.post("/tratamentos/create/", Tratamento.create);
router.get("/tratamentos/read", Tratamento.readAll);
router.put("/tratamentos/update", Tratamento.updateItem);
router.delete("/tratamentos/delete/:id", Tratamento.deleteItem);

module.exports = router;