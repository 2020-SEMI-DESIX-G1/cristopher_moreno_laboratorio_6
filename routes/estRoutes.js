//MODULES
const express = require('express');
const estController = require('./../controllers/estController');

//TLC
const router = express.Router();

//HTTP METHODS

router
  .route('/')
  .get(estController.getAllEstudiantes)

module.exports = router;
