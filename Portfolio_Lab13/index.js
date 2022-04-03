const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');


const rutas_general = require('./routes/general');
app.use('/', rutas_general);

const rutas_proyectos = require('./routes/proyectos');
app.use('/proyectos', rutas_proyectos);

const rutas_sobreMi = require('./routes/sobreMi');
app.use('/sobreMi', rutas_sobreMi);

const rutas_contacto = require('./routes/contacto');
app.use('/contacto', rutas_contacto);

app.listen(3000);

