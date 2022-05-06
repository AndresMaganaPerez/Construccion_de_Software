const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const csrf = require('csurf');
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'asdfjñlaskdjflñkuñigdhgsdfasdfjñjashdghiufg8o48023ro23uj',
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static('public'));

// Csurf
app.use(csrfProtection);
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});



const rutas_login = require('./routes/login_route');
app.use('/', rutas_login);

const rutas_signup = require('./routes/signup_route');
app.use('/signup', rutas_signup);

const rutas_general = require('./routes/general_route');
app.use('/general', rutas_general);

const rutas_proyectos = require('./routes/proyectos_route');
app.use('/proyectos', rutas_proyectos);

const rutas_sobreMi = require('./routes/sobreMi_route');
app.use('/sobreMi', rutas_sobreMi);

const rutas_contacto = require('./routes/contacto_route');
app.use('/contacto', rutas_contacto);

app.listen(3000);

