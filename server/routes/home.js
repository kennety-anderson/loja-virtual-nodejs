const express = require('express');

const path = require('path');

const app = express();


//rota home da pagina
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '../../public/home.html'));
});



//exportação do modulo
module.exports = app;