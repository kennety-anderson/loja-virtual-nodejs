//requiremento de modulos da aplicação
const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const http = require('http');

const path = require('path');

const port = 3000 || 8080;

const colors = require('colors');

const app = express();


//particionação em json e atraves do corpo da url
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//entrega de arquivos staticos do servidor para o front pelo express
app.use(express.static(path.join(__dirname, '../assets/arquivos-css')));
app.use(express.static(path.join(__dirname, '../assets/arquivos-js')));

//requerindo modulo de rotas
app.use(require('./routes/index'));


mongoose.connect('mongodb://localhost:27017/lojaVirtual',
    { useNewUrlParser: true, useCreateIndex: true }, (err, resp) => {

        if (err) {
            console.log(`${err}`.red);
        }

        console.log('============================================'.white);
        console.log('Banco de dados online'.cyan);
    })

//criação do servidor http usando o express
http.createServer(app)
    .listen(port, () => console.log(`Servidor rodando na porta ${port}`.cyan));