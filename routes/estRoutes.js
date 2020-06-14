//MODULES
const express = require('express');
const estController = require('./../controllers/estController');

//TLC: top level code
const router = express.Router();

//HTTP METHODS: GET/POST/PUT_PATCH/DELETE
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
