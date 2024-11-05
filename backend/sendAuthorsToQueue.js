// sendAuthorsToQueue.js
import amqp from 'amqplib';
import authorsData from './src/data/authorsData.json'; // Ajusta la ruta según tu estructura

const RABBITMQ_URL = 'amqps://smczupur:ab7qbZqhEorf2cEqe3QJMv7uk7bRoAlc@cow.rmq2.cloudamqp.com/smczupur'; // Reemplaza con tu URL de CloudAMQP
const QUEUE_NAME = 'authorsQueue';

async function sendMessages() {
  try {
    // Conexión a RabbitMQ
    const connection = await amqp.connect(RABBITMQ_URL);
    const channel = await connection.createChannel();

    // Asegurarse de que la cola exista
    await channel.assertQueue(QUEUE_NAME, { durable: true });

    // Enviar cada autor como un mensaje en la cola
    authorsData.forEach((author) => {
      const message = JSON.stringify(author);
      channel.sendToQueue(QUEUE_NAME, Buffer.from(message));
      console.log(`Mensaje enviado: ${message}`);
    });

    // Cerrar conexión
    setTimeout(() => {
      connection.close();
      console.log('Conexión cerrada');
    }, 500);

  } catch (error) {
    console.error('Error al enviar mensajes a la cola:', error);
  }
}

sendMessages();
