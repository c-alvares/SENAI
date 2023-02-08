const express = require('express');
const router = express.Router();

const Entregador = require("../controllers/entregador");
const Pedido = require("../controllers/pedido");

router.get("/entregadores", Entregador.test);
router.post("/entregadores", Entregador.create);
router.get("/entregadores", Entregador.readAll);
router.get("/entregadores/:id", Entregador.read);
router.post("/entregadores/login", Entregador.login);

router.post("/pedidos/create", Pedido.create);
router.get("/pedidos/realAll", Pedido.readAll);
router.get("/pedidos/read/:id", Pedido.read);

module.exports = router;