
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Laboratorio #6 - Creación de endpoints en Javascript')
})
 
app.listen(3000, () => console.log("Ejecutando server en el puerto 3000"))