const express = require('express');
const router = express.Router();

const Profissional = require("../controllers/profissionais.controller");

router.get("/profissionais/read/", Profissional.verificarProfissionais);
router.get("/profissional/:id", Profissional.tratamentos);

module.exports = router;