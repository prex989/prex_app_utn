const { response, request } = require('express');

const usuarioGet = (req = request, res = response) => {
    res.send() {
        mensaje: 'Peticion get desde el controlador';
    };
};

module.exports = {
    usuarioGet
};