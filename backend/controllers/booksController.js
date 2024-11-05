// backend/controllers/booksController.js

const Book = require('../models/Book');

// Obtener todos los libros
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    console.error('Error al obtener libros:', error);
    res.status(500).json({ message: 'Error al obtener libros' });
  }
};

// Crear un nuevo libro
const createBook = async (req, res) => {
  const { title, authorId, publisherId, publicationYear } = req.body;
  try {
    const newBook = await Book.create({ title, authorId, publisherId, publicationYear });
    res.status(201).json(newBook);
  } catch (error) {
    console.error('Error al crear libro:', error);
    res.status(500).json({ message: 'Error al crear libro' });
  }
};

// Actualizar un libro
const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, authorId, publisherId, publicationYear } = req.body;
  try {
    const book = await Book.findByPk(id);
    if (book) {
      book.title = title;
      book.authorId = authorId;
      book.publisherId = publisherId;
      book.publicationYear = publicationYear;
      await book.save();
      res.json(book);
    } else {
      res.status(404).json({ message: 'Libro no encontrado' });
    }
  } catch (error) {
    console.error('Error al actualizar libro:', error);
    res.status(500).json({ message: 'Error al actualizar libro' });
  }
};

// Eliminar un libro
const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (book) {
      await book.destroy();
      res.json({ message: 'Libro eliminado' });
    } else {
      res.status(404).json({ message: 'Libro no encontrado' });
    }
  } catch (error) {
    console.error('Error al eliminar libro:', error);
    res.status(500).json({ message: 'Error al eliminar libro' });
  }
};

module.exports = {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
};
