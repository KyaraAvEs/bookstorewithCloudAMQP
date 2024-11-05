// backend/controllers/authorsController.js

const Author = require('../models/Author');

// Obtener todos los autores
const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.json(authors);
  } catch (error) {
    console.error('Error al obtener autores:', error);
    res.status(500).json({ message: 'Error al obtener autores' });
  }
};

// Crear un nuevo autor
const createAuthor = async (req, res) => {
  const { name, bio } = req.body;
  try {
    const newAuthor = await Author.create({ name, bio });
    res.status(201).json(newAuthor);
  } catch (error) {
    console.error('Error al crear autor:', error);
    res.status(500).json({ message: 'Error al crear autor' });
  }
};

// Actualizar un autor
const updateAuthor = async (req, res) => {
  const { id } = req.params;
  const { name, bio } = req.body;
  try {
    const author = await Author.findByPk(id);
    if (author) {
      author.name = name;
      author.bio = bio;
      await author.save();
      res.json(author);
    } else {
      res.status(404).json({ message: 'Autor no encontrado' });
    }
  } catch (error) {
    console.error('Error al actualizar autor:', error);
    res.status(500).json({ message: 'Error al actualizar autor' });
  }
};

// Eliminar un autor
const deleteAuthor = async (req, res) => {
  const { id } = req.params;
  try {
    const author = await Author.findByPk(id);
    if (author) {
      await author.destroy();
      res.json({ message: 'Autor eliminado' });
    } else {
      res.status(404).json({ message: 'Autor no encontrado' });
    }
  } catch (error) {
    console.error('Error al eliminar autor:', error);
    res.status(500).json({ message: 'Error al eliminar autor' });
  }
};

module.exports = {
  getAllAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
