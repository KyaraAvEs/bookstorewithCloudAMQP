// backend/consumers/authorConsumer.js
const connectRabbitMQ = require('../config/rabbitmq');

const consumeAuthorsQueue = async () => {
  const { channel } = await connectRabbitMQ();
  
  // Consume mensajes de la cola "authors"
  channel.consume('authors', (message) => {
    if (message) {
      const authorData = JSON.parse(message.content.toString());
      console.log('Datos del autor recibidos:', authorData);
      // Aquí puedes procesar los datos, como agregarlos a una base de datos
      channel.ack(message); // Confirma que el mensaje fue procesado
    }
  });
};

consumeAuthorsQueue();
