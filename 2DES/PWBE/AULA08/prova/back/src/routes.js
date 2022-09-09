const express = require('express');

const router = express.Router();

const ClientesController = require('./controllers/ClientesController');
const FilmesController = require('./controllers/FilmesController');

router.get("/usuarios", ClientesController.listarClientes);
// router.post("/usuarios/", ClientesController.cadastrarClientes);

// router.get("/filmes", FilmesController.listarFilmes);

module.exports = router;
