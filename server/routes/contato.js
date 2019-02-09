const express = require('express');

const path = require('path');

const Contato = require('../models/contato');

const app = express();

//petição get da pagina para contatos
app.get('/contato', (req, res) => {

    res.sendFile(path.join(__dirname, '../../public/contato.html'));
});


//resposta post do formulario de contato
app.post('/contato', (req, res) => {

    let body = req.body;

    let contato = new Contato({
        nome: body.nome,
        email: body.email,
        mensagem: body.mensagem
    });

    //salvando contato na base de dados
    contato.save((err, contatoDB) => {

        if(err) {
            console.log('============================================'.white);
            console.log(`${err}`.red);
            return res.send('<h1>Não foi possivel realizar seu contato por favor tente mais tarde</h1>');
        }

        res.send('<h1>Contato realizado com sucesso</h1>');
        console.log(contatoDB);

    })

});



module.exports = app;