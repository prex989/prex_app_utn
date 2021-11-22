const { Router } = require('express');
const res = require('express/lib/response');
const router = Router();
const session = require('express-session');
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(require('./routes'));
app.set('view engine', 'hbs')
app.use(express.json());

//Invocamos a bcrypt
const bcrypt = require('bcryptjs');


//establecemos las rutas
// app.get('/login', (req, res) => {
//     res.render('login');
// })


// app.get('/register', (req, res) => {
//     res.render('register');
// })

//Metodo para la autenticacion
app.post('/auth', async(req, res) => {
    const user = req.body.user;
    const pass = req.body.pass;
    let passwordHash = await bcrypt.hash(pass, 8);
    if (user && pass) {
        conn.query('SELECT * FROM usuarios WHERE user = ?', [user], async(error, results, fields) => {
            if (results.length == 0 || !(await bcrypt.compare(passwordHash, results[0].pass))) {
                console.log("logueado incorectamente");
                res.redirect('login');

                //Mensaje simple y poco vistoso
                //res.send('Usuario o Clave incorrecta');				
            } else {
                //creamos una var de session y le asignamos true si INICIO SESSION       
                req.session.loggedin = true;
                req.session.name = results[0].name;
                console.log("logueado ok");
                res.redirect('admin');
            }
            res.end();
        });
    } else {
        res.send('Por favor ingresar usuario y/o password');
        res.end();
    }
});

//Método para controlar que está logueado en todas las páginas
app.get('/', (req, res) => {
    if (req.session.loggedin) {
        res.render('index', {
            login: true,
            name: req.session.name
        });
    } else {
        res.render('index', {
            login: false,
            name: 'Debe iniciar sesión',
        });
    }
    res.end();
});

//función para limpiar la caché luego del logout
app.use(function(req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});

//Logout
//Destruye la sesión.
app.get('/logout', function(req, res) {
    req.session.destroy(() => {
        res.redirect('/') // siempre se ejecutará después de que se destruya la sesión
    })
});