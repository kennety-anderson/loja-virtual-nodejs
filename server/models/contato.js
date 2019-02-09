const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//schema para a realização de contatos
const contatoSchema = new Schema({
    nome: {
        type: String,
        required: [true, 'E necessario um nome']
    },
    email: {
        type: String,
        required: [true, 'E necessario um email']
    },
    mensagem: {
        type: String,
        required: false
    }  
});


//exportação do schema de contatos
module.exports = mongoose.model('Contato', contatoSchema);

