const express = require('express');
const router = express.Router();

const Profissional = require("../controllers/profissionais.controller");

router.get("/profissionais/read/", Profissional.verificarProfissionais);

module.exports = router;