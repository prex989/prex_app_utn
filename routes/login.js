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




//Metodo para la autenticacion
app.post('/auth', async(req, res) => {
    const user = req.body.user;
    const pass = req.body.pass;
    let passwordHash = await bcrypt.hash(pass, 8);
    if (user && pass) {
        conn.query('SELECT * FROM usuarios WHERE user = ?', [user], async(error, results) => {
            if (results.length == 0 || !(await bcrypt.compare(pass, results[0].pass))) {
                res.redirect('/login')
            } else {
                //creamos una var de session y le asignamos true si INICIO SESSION       
                req.session.loggedin = true;
                req.session.name = results[0].name;
                mostrarAlerta();
                res.redirect('/admin')
            }
            res.end();
        });
    } else {
        res.send('Por favor ingresar usuario o password!');
        res.end();
    }
});

//funcion de alertas
function mostrarAlerta() {
    const swal = Swal.fire({
        alert: true,
        title: "Conexión exitosa",
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
    })
}

//Método para controlar que está logueado en todas las páginas
app.get('/admin', (req, res) => {
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