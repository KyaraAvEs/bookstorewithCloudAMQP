// backend/queue/processQueue.js

const { connectQueue } = require('./messageQueue');

// Función para procesar mensajes de una cola específica
const processMessage = async (queue, callback) => {
  try {
    const channel = await connectQueue();

    // Consume mensajes de la cola
    await channel.consume(queue, (message) => {
      if (message !== null) {
        const content = JSON.parse(message.content.toString());
        console.log(`Mensaje recibido de la cola ${queue}:`, content);

        // Ejecuta el callback proporcionado para procesar el mensaje
        callback(content);

        // Confirmar que el mensaje ha sido procesado
        channel.ack(message);
      }
    });
  } catch (error) {
    console.error(`Error al procesar mensajes de la cola ${queue}:`, error);
  }
};

// Callback para manejar los mensajes recibidos
const handleBookstoreMessage = (message) => {
  console.log('Procesando mensaje de bookstore:', message);
  // Lógica específica para bookstore
};

const handleAuthorsMessage = (message) => {
  console.log('Procesando mensaje de authors:', message);
  // Lógica específica para authors
};

const handlePublishersMessage = (message) => {
  console.log('Procesando mensaje de publishers:', message);
  // Lógica específica para publishers
};

// Inicia el procesamiento de cada cola
processMessage('bookstore', handleBookstoreMessage);
processMessage('authors', handleAuthorsMessage);
processMessage('publishers', handlePublishersMessage);

module.exports = { processMessage };
