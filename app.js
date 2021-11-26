//Invocamos a express
const express = require('express')
const app = express()

//Invocamos a HBS
const hbs = require('hbs')

//invocamos a Dotenv   ///sacar el const  en el dotenv
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const port = process.env.PORT || 3000;

// const bodyParser = require('body-parser'); sacar esta linea
const mysql = require('mysql');

//apuntamos a las rutas de js
// const { connect } = require('./routes');

// invocamos a Cors por manejo de HTTP y Ajaxs quedan aca
var cors = require('cors');

//Invocamos a Urlencoded para obtener datos de formularios quedan aca
app.use(express.urlencoded({ extended: false }));

//Middleware y Setting quedan aca
app.use(require('./routes'));
app.set('view engine', 'hbs');

//apuntamos a public y assets el contenido estatico quedan aca
app.use(express.static("public"));
app.use(express.json());
app.use('/assets', express.static(__dirname + '/public'));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public/css')));
hbs.registerPartials(__dirname + "/views/partials/");


//Puerto utilizado para la conexion quedan aca
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

//alertas sweet2

// CommonJS
const Swal = require('sweetalert2')


//conexion a base de datos

const conn = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME
});

conn.connect((err) => {
    if (err) throw err;
    console.log('conexion establecida con BD');
});

module.exports = conn;

//session logueo

// const auth = require('./routes/login');

//Invocamos a bcrypt
const bcrypt = require('bcryptjs');

//variables de session
const session = require('express-session');
const { default: swal } = require('sweetalert');

app.use(session({
    secret: 'kdfklej4k4jkljlkj',
    resave: true,
    saveUninitialized: true
}));


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


app.get('/admingaleria', (req, res) => {
    // res.send('Hello Mundo!')
    res.render('admingaleria')
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

// Trae todos los registros de ventas

app.get('/ventas', (req, res) => {
    let sql = "SELECT * FROM propiedades WHERE estado_inm='Venta'";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render('ventas', {
            results
        });
    });
})

// Trae todos los registros de galeria para galeria.hbs

app.get('/galeria', (req, res) => {
    let sql = "SELECT * FROM galeria";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render('galeria', {
            results
        });
    });
})

// traer los registros de un id en galeria

app.get('/galeria/:id', (req, res) => {
    let id = req.params.id;
    let sql = "SELECT url FROM galeria WHERE id=?";
    let query = conn.query(sql, [id], (err, results) => {
        if (err) throw err;
        res.render('galeria', {
            results
        });
    });
})



//Trae todas las fotos de admingaleria

//Trae todas las fotos de galeria API

app.get('/galeriazoom', (req, res) => {
    let sql = "SELECT * FROM galeria ORDER BY id asc";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)
    });
})

app.post('/galeriazoom', (req, res) => {
    let data = { id: req.body.id, url: req.body.url };
    let sql = "INSERT INTO galeria SET?";
    conn.query(sql, data, function(error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    });
});

app.put('/galeriazoom/:id', (req, res) => {
    let keygal = req.body.keygal;
    let url = req.body.url;
    let id = req.params.id;
    let sql = "UPDATE galeria SET url=? WHERE keygal=?";
    conn.query(sql, [url, id, keygal], function(error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    });
});

//Eliminar de galeria

app.delete('/galeriazoom/:keygal', (req, res) => {
    conn.query('DELETE FROM galeria WHERE keygal=?', [req.params.keygal], function(error, filas) {
        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    });
});

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

//Crear nuevo registro propiedades

app.post('/propiedades', (req, res) => {
    let data = { precio: req.body.precio, supcub: req.body.supcub, suptot: req.body.suptot, dormi: req.body.dormi, descripcion: req.body.descripcion, estado_inm: req.body.estado_inm, imagen: req.body.imagen };
    let sql = "INSERT INTO propiedades SET?";
    conn.query(sql, data, function(error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    });
});

//editar propiedades
app.put('/propiedades/:id', (req, res) => {
    let id = req.params.id;
    let precio = req.body.precio;
    let supcub = req.body.supcub;
    let suptot = req.body.suptot;
    let dormi = req.body.dormi;
    let descripcion = req.body.descripcion;
    let estado_inm = req.body.estado_inm;
    let imagen = req.body.imagen;
    let sql = "UPDATE propiedades SET precio=?, supcub=?, suptot=?, dormi=?, descripcion=?, estado_inm=?, imagen=? WHERE id=?";
    conn.query(sql, [precio, supcub, suptot, dormi, descripcion, estado_inm, imagen, id], function(error, results) {
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

//establecemos las rutas de logueo
app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});


app.get('*', (req, res) => {
    res.send('')
})

//logueo funciones y metodos

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
                res.redirect('/admin')
            }
            res.end();
        });
    } else {
        res.send('Por favor ingresar usuario o password!');
        res.end();
    }
});


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