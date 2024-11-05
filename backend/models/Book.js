// backend/models/Book.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Author = require('./Author');
const Publisher = require('./Publisher');

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publicationYear: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  authorId: {
    type: DataTypes.INTEGER,
    references: {
      model: Author,
      key: 'id',
    },
    allowNull: false,
  },
  publisherId: {
    type: DataTypes.INTEGER,
    references: {
      model: Publisher,
      key: 'id',
    },
    allowNull: false,
  },
}, {
  timestamps: true,
});

// Definir las relaciones
Book.belongsTo(Author, { foreignKey: 'authorId', as: 'author' });
Book.belongsTo(Publisher, { foreignKey: 'publisherId', as: 'publisher' });

Author.hasMany(Book, { foreignKey: 'authorId', as: 'books' });
Publisher.hasMany(Book, { foreignKey: 'publisherId', as: 'books' });

module.exports = Book;
