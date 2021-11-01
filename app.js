const express = require('express')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 3000;


require('dotenv').config();
app.use(express.urlencoded({ extended: false }));
app.use(require('./routes'));
app.set('view engine', 'hbs')
app.use(express.static("public"));

app.use(express.json());

// app.use(express.static(path.join(__dirname,'public')));
hbs.registerPartials(__dirname + "/views/partials/")

app.get('/', (req, res) => {
    // res.send('Hello Mundo!')
    res.render('index')
})
app.get('/index', (req, res) => {
    // res.send('Hello Mundo!')
    res.render('index')
})
app.get('/alquileres', (req, res) => {

    res.render('alquileres')
})

app.get('/a201', (req, res) => {

        res.render('a201')
    })
    // app.get('/success', (req, res) => {

//     res.render('success')
// })


// app.get('/contactos', (req, res) => {
//     res.send('Yo soy contacto!')
// })

// app.get('/usuarios', (req, res) => {
//     res.send('usuario: Pablo')
// })

// app.get('/ayuda', (req, res) => {
//     res.send('Vengo a darte una mano')
// })
app.get('*', (req, res) => {
    res.send('')
})

app.listen(port, () => {
    console.log(`Usando el puerto http://localhost:${port}`)
})