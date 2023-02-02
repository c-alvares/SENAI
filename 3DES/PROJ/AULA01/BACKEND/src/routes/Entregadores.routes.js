const express = require('express');
const router = express.Router();

const Entregador = require("../controllers/Entregadores.controller");

router.get("/entregadores", Entregador.listarTodosEntregadores);
router.get("/entregador", Entregador.listarUmEntregador);
router.get("/login", Entregador.LoginDelivery);

module.exports = router;