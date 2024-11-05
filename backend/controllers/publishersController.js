// backend/controllers/publishersController.js

const Publisher = require('../models/Publisher');

// Obtener todas las editoriales
const getAllPublishers = async (req, res) => {
  try {
    const publishers = await Publisher.findAll();
    res.json(publishers);
  } catch (error) {
    console.error('Error al obtener editoriales:', error);
    res.status(500).json({ message: 'Error al obtener editoriales' });
  }
};

// Crear una nueva editorial
const createPublisher = async (req, res) => {
  const { name, country } = req.body;
  try {
    const newPublisher = await Publisher.create({ name, country });
    res.status(201).json(newPublisher);
  } catch (error) {
    console.error('Error al crear editorial:', error);
    res.status(500).json({ message: 'Error al crear editorial' });
  }
};

// Actualizar una editorial
const updatePublisher = async (req, res) => {
  const { id } = req.params;
  const { name, country } = req.body;
  try {
    const publisher = await Publisher.findByPk(id);
    if (publisher) {
      publisher.name = name;
      publisher.country = country;
      await publisher.save();
      res.json(publisher);
    } else {
      res.status(404).json({ message: 'Editorial no encontrada' });
    }
  } catch (error) {
    console.error('Error al actualizar editorial:', error);
    res.status(500).json({ message: 'Error al actualizar editorial' });
  }
};

// Eliminar una editorial
const deletePublisher = async (req, res) => {
  const { id } = req.params;
  try {
    const publisher = await Publisher.findByPk(id);
    if (publisher) {
      await publisher.destroy();
      res.json({ message: 'Editorial eliminada' });
    } else {
      res.status(404).json({ message: 'Editorial no encontrada' });
    }
  } catch (error) {
    console.error('Error al eliminar editorial:', error);
    res.status(500).json({ message: 'Error al eliminar editorial' });
  }
};

module.exports = {
  getAllPublishers,
  createPublisher,
  updatePublisher,
  deletePublisher,
};
