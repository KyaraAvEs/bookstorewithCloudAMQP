// backend/services/bookService.js

const connectRabbitMQ = require('../config/rabbitmq');

const sendToBookstoreQueue = async (bookData) => {
  const { channel } = await connectRabbitMQ();
  
  // Envía un mensaje a la cola de bookstore
  channel.sendToQueue('bookstore', Buffer.from(JSON.stringify(bookData)));
  console.log('Mensaje enviado a la cola de bookstore');
};

module.exports = {
  sendToBookstoreQueue,
};
