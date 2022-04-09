const express = require('express');
const router = express.Router();
const path = require('path');
const isAuth = require('./controllers/is-auth.js');



const contactoController = require('../controllers/contacto_controller');

router.get("/", isAuth,contactoController.contacto); /* Primera ruta a la que se llama, llamando al método de contacto del controlador. */

router.get("/nuevomensaje", isAuth, contactoController.nuevomensaje);

router.post("/nuevomensaje", isAuth, contactoController.postMensaje);


module.exports = router;