const express = require('express');
const router = express.Router()

const path = require('path');

const contactoController = require('../controllers/contacto_controller');

router.get("/", contactoController.contacto);

router.get("/nuevomensaje", contactoController.nuevomensaje);

router.post("/nuevomensaje", contactoController.postMensaje);


module.exports = router;