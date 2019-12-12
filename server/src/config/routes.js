const express = require('express')

module.exports = function (server) {
    const router = express.Router();
    server.use('/api', router);
//nome da rota em vermelho
    const cursos = require('../api/cursos')
    const contato = require('../api/contatos')

    cursos.register(router, '/cursos')
    contato.register(router, '/contatos')

};