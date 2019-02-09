const express = require('express');

const app = express();


app.use(require('./home'));
app.use(require('./contato'));


module.exports = app;