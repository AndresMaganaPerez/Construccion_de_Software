const express = require('express');
const router = express.Router()

const path = require('path');

const proyectosController = require('../controllers/proyectos_controller');

router.get("/", proyectosController.get);

module.exports = router;