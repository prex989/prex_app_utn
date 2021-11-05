const express = require('express')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { connect } = require('./routes');
var cors = require('cors');

require('dotenv').config();
app.use(express.urlencoded({ extended: false }));
app.use(require('./routes'));
app.set('view engine', 'hbs')
app.use(express.static("public"));
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use('/assets', express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + "/views/partials/");

// app.use('/assets', express.static(__dirname + '/public'));


app.listen(port, () => {
    console.log(`Usando el puerto http://localhost:${port}`)
});

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
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

app.get('/admin', (req, res) => {
    // res.send('Hello Mundo!')
    res.render('admin')
})

// Trae todos los registros alquileres

app.get('/alquileres', (req, res) => {
    let sql = "SELECT * FROM propiedades WHERE estado_inm='Alquiler'";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render('alquileres', {
            results
        });
    });
})

//Crear nuevo registro propiedades

app.post('/propiedades', (req, res) => {
    let data = { precio: req.body.precio, supcub: req.body.supcub, suptot: req.body.suptot, dormi: req.body.dormi, descripcion: req.body.descripcion, estado_inm: req.body.estado_inm };
    let sql = "INSERT INTO propiedades SET?";
    conn.query(sql, data, function(error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    });
});


//Trae todas las fotos de galeria

app.get('/galeria', (req, res) => {
    let sql = "SELECT * FROM galeria";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render('galeria', {
            results
        });
    });
})

//Traer todos los registros propiedades
app.get('/propiedades', (req, res) => {
    let sql = "SELECT * FROM propiedades";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)
            // res.render('admin', {
            //     results
            // });
    });
})



//editar propiedades
app.put('/propiedades/:id', (req, res) => {
    let id = req.params.id;
    let precio = req.body.precio;
    let supcub = req.body.supcub;
    let suptot = req.body.suptot;
    let dormi = req.body.dormi;
    let descripcion = req.body.descripcion;
    let estado_inm = req.body.estado_inm;
    let sql = "UPDATE propiedades SET precio=?, supcub=?, suptot=?, dormi=?, descripcion=?, estado_inm=? WHERE id=?";
    conn.query(sql, [precio, supcub, suptot, dormi, descripcion, estado_inm, id], function(error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    });
});

//Eliminar propiedades

app.delete('/propiedades/:id', (req, res) => {
    conn.query('DELETE FROM propiedades WHERE id=?', [req.params.id], function(error, filas) {
        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    });
});

//Agregar

// app.get('/admin', (req, res) => {
//     let sql = "SELECT * FROM propiedades";
//     let query = conn.query(sql, (error, filas) => {
//         if (error) {
//             throw error;
//         } else {
//             res.send(filas);
//         }
//     });
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