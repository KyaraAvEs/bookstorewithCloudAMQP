// config/database.js
const { Sequelize } = require('sequelize');

// Configuración de la conexión
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres', // O usa 'mysql' según la base de datos
  logging: false, // Configura en true si quieres ver las consultas SQL en consola
});

// Conexión a la base de datos
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida con éxito.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
};

module.exports = { sequelize, connectDB };
