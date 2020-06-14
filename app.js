//MODULES 
const express = require('express')
const estudiantes = require('./routes/estRoutes');

//TCL
const app = express();

//ROUTES
app.use('/estudiantes', estudiantes);

module.exports = app;