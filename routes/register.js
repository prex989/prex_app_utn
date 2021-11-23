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


//Método para la REGISTRACIÓN de usuarios
app.post('/register', async(req, res) => {
    const user = req.body.user;
    const name = req.body.name;
    const pass = req.body.pass;
    const rol = req.body.rol;
    let passwordHash = await bcrypt.hash(pass, 8);
    conn.query('INSERT INTO usuarios SET ?', { user: user, name: name, pass: passwordHash, rol: rol }, async(error, results) => {
        if (error) {
            res.redirect("/register");
        } else {
            res.redirect("/login");
        }
    });
})

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