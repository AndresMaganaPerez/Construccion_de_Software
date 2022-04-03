const express = require('express');
const router = express.Router()

const path = require('path');

const contactoController = require('../controllers/contacto_controller');

router.get("/", contactoController.contacto);

//router.post("/", contactoController.mensajePost);

router.get("/nuevomensaje", contactoController.nuevomensaje);

router.post("/nuevomensaje", contactoController.mensajePost);


module.exports = router;