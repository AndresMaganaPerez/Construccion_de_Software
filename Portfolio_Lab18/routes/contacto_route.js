const express = require('express');
const router = express.Router()

const path = require('path');

const contactoController = require('../controllers/contacto_controller');
const isAuth = require('../controllers/is-Auth');

router.get("/",isAuth, contactoController.contacto);

router.get("/nuevomensaje", isAuth, contactoController.nuevomensaje);

router.post("/nuevomensaje", isAuth, contactoController.postMensaje);


module.exports = router;