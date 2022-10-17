const express = require('express');
const router = express.Router();

const Departamento = require("../controllers/departamento.controller");

router.post("/create", Departamento.create);
router.get("/read", Departamento.readAll);
router.delete("/del/:cod_depto", Departamento.del);

module.exports = router;