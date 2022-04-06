const express = require('express');
const router = express.Router()

const path = require('path');

const proyectosController = require('../controllers/proyectos_controller');

router.get("/", proyectosController.get);

router.get("/nuevoproyecto", proyectosController.get_nuevo);

router.post("/nuevoproyecto", proyectosController.post);

module.exports = router;