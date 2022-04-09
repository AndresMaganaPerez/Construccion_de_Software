const express = require('express');
const router = express.Router()

const path = require('path');

const proyectosController = require('../controllers/proyectos_controller');
const isAuth = require('../controllers/is-Auth');

router.get("/", proyectosController.get);

router.get("/nuevoproyecto", isAuth, proyectosController.get_nuevo);

router.post("/nuevoproyecto", isAuth, proyectosController.post);

module.exports = router;