// backend/models/Publisher.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Publisher = sequelize.define('Publisher', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: true,
});

module.exports = Publisher;
