import connectRabbitMQ from './config/rabbitmq.js';

const init = async () => {
  try {
    await connectRabbitMQ();
    console.log('RabbitMQ conectado y listo');
  } catch (error) {
    console.error('Error al iniciar la conexión con RabbitMQ:', error);
  }
};

init();



/* const express = require('express');
const connectRabbitMQ = require('./config/rabbitmq');
const app = express();
const PORT = process.env.PORT || 5672;

// Middleware y rutas
app.use(express.json());
// Agrega tus rutas aquí, ejemplo:
// app.use('/api/authors', require('./routes/authorsRoutes'));

// Conexión a RabbitMQ
connectRabbitMQ()
  .then(() => console.log('Conexión a RabbitMQ establecida'))
  .catch((err) => console.error('Error al conectar a RabbitMQ:', err));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
 */