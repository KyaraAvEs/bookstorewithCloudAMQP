// backend/services/authorService.js
const connectRabbitMQ = require('../config/rabbitmq');

const addAuthorToQueue = async (authorData) => {
  const { channel } = await connectRabbitMQ();
  
  // Envía el JSON del autor como un mensaje a la cola "authors"
  channel.sendToQueue('authors', Buffer.from(JSON.stringify(authorData)));
  console.log('Mensaje enviado a la cola de autores:', authorData);
};

module.exports = {
  addAuthorToQueue,
};
