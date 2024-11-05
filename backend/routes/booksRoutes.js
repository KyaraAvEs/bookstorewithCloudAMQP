// backend/routes/booksRoutes.js

const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

// Crear un nuevo libro
router.post('/', booksController.createBook);

// Obtener todos los libros
router.get('/', booksController.getBooks);

// Obtener un libro por ID
router.get('/:id', booksController.getBookById);

// Actualizar un libro por ID
router.put('/:id', booksController.updateBook);

// Eliminar un libro por ID
router.delete('/:id', booksController.deleteBook);

module.exports = router;
