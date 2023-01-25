const express = require('express');
const router = express.Router();

const Pedido = require('../controllers/Pedidos.controller');

router.post("/novopedido", Pedido.criarPedido);
router.get("/todosospedidos", Pedido.todosOsPedidos);
router.get("/pedidopornome", Pedido.pedidoPorNome);
router.get("/pedidosapreparar", Pedido.PedidosAPreparar);
router.get("/pedidosaentregar", Pedido.PedidosAEntregar);
router.put("/atualizarpedidopronto", Pedido.atualizarPedidoPronto);
router.put("/atualizarpedidoentregue", Pedido.atualizarPedidoEntregue);
router.delete("/deletarpedido", Pedido.deletarPedido);

module.exports = router;