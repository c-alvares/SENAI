const express = require('express');

const router = express.Router();

const ClientesController = require('./controllers/ClientesController');
const FilmesController = require('./controllers/FilmesController');

router.get("/usuarios", ClientesController.listarClientes);
router.post("/usuarios/cadastrar", ClientesController.cadastrarClientes);

router.get("/vw_locados", FilmesController.listarLocacoes);

module.exports = router;
