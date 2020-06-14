//MODULES
const express = require('express');
const estController = require('./../controllers/estController');

//TLC
const router = express.Router();

//HTTP METHODS

router
  .route('/')
  .get(estController.getAllEstudiantes)
  .post(estController.createEstudiantes)

router
  .route('/:id')
  .get(estController.getEstudiante)
  .put(estController.updateEstudiante)
  .delete(estController.deleteEstudiante);

module.exports = router;
