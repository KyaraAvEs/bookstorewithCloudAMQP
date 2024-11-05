// backend/routes/publishersRoutes.js

const express = require('express');
const router = express.Router();
const publishersController = require('../controllers/publishersController');

// Crear una nueva editorial
router.post('/', publishersController.createPublisher);

// Obtener todas las editoriales
router.get('/', publishersController.getPublishers);

// Obtener una editorial por ID
router.get('/:id', publishersController.getPublisherById);

// Actualizar una editorial por ID
router.put('/:id', publishersController.updatePublisher);

// Eliminar una editorial por ID
router.delete('/:id', publishersController.deletePublisher);

module.exports = router;
