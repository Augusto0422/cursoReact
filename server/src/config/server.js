const port = 3200;

const bodyParser = require('body-parser');
const express = require('express');
const cors = require('./cors')
const server = express(); //novo servidor

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json());
server.use(cors)

server.listen(port, function () {
    console.log(`servidor no ar, na porta ${port}`);
});

module.exports = server