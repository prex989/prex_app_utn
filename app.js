const express = require('express')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { connect } = require('./routes');


require('dotenv').config();
app.use(express.urlencoded({ extended: false }));
app.use(require('./routes'));
app.set('view engine', 'hbs')
app.use(express.static("public"));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname,'public')));
hbs.registerPartials(__dirname + "/views/partials/");

// app.use('/assets', express.static(__dirname + '/public'));


app.listen(port, () => {
    console.log(`Usando el puerto http://localhost:${port}`)
});

//conexion a base de datos

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jlg_database'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('conexion establecida con BD');
});


//migrar a routes galeria



app.get('/', (req, res) => {
    // res.send('Hello Mundo!')
    res.render('index')
})
app.get('/index', (req, res) => {
    // res.send('Hello Mundo!')
    res.render('index')
})
app.get('/alquileres', (req, res) => {
    let sql = "SELECT * FROM propiedades WHERE estado_inm=1";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render('alquileres', {
            results
        });
    });
})

app.get('/galeria', (req, res) => {
    let sql = "SELECT * FROM galeria";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render('galeria', {
            results
        });
    });
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