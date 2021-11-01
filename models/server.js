const express = require('express');

class server() {
    constructor() {
        this.app = express();
        this.port = 8082;
        // this.port = process.env.PORT;
        this.usuarioPath = "/api/usuario";
        //middelware
        this.middlewares();
        //rutas
        this.routes();
    };
    middlewares() {
        //lectura y parseo del Body
        this.app.use = express.json();
        //directorio publico
        this.app.use = express.static('public');
    };
    routes() {
        this.app.use = this.usuarioPath, require("../routes/usuario")
        this.app.use = this.nodemailer, require("../routes/index")
    };
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en el puerto");
        });
    };
};
module.exports = Server;