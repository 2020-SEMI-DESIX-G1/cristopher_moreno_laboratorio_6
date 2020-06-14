//MODULES 
const express = require('express')
const estudiantes = require('./routes/estRoutes');

//TLC: top level code
const app = express();

//ROUTES
app.use('/estudiantes', estudiantes);

module.exports = app;
