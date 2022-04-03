const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');


const rutas_general = require('./routes/general_route');
app.use('/', rutas_general);

const rutas_proyectos = require('./routes/proyectos_route');
app.use('/proyectos', rutas_proyectos);

const rutas_sobreMi = require('./routes/sobreMi_route');
app.use('/sobreMi', rutas_sobreMi);

const rutas_contacto = require('./routes/contacto_route');
app.use('/contacto', rutas_contacto);

app.listen(3000);

