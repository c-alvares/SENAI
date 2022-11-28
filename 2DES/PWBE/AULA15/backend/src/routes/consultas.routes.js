const express = require('express');
const router = express.Router();

const Consulta = require("../controllers/consultas.controller");

router.get("/consultas/read/", Consulta.verificarConsultas);

module.exports = router;