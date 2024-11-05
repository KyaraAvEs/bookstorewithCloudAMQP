import amqp from 'amqplib';
import dotenv from 'dotenv';

dotenv.config();

const RABBITMQ_URL = process.env.RABBITMQ_URL;

const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect(RABBITMQ_URL, { timeout: 10000 });
    console.log('Conectado a RabbitMQ en CloudAMQP');
    const channel = await connection.createChannel();
    console.log('Canal de comunicación creado en RabbitMQ');

    await channel.assertQueue('bookstore');
    await channel.assertQueue('authors');
    await channel.assertQueue('publishers');

    return { connection, channel };
  } catch (error) {
    console.error('Error al conectar a RabbitMQ:', error.message);
    console.error('Stack Trace:', error.stack);
    throw error;
  }
};

export default connectRabbitMQ;



/* console.log('RABBITMQ_URL:', RABBITMQ_URL);

require('dotenv').config();
const amqp = require('amqplib');

const RABBITMQ_URL = process.env.RABBITMQ_URL;

const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect(RABBITMQ_URL);
    console.log('Conectado a RabbitMQ en CloudAMQP');
    const channel = await connection.createChannel();
    console.log('Canal de comunicación creado en RabbitMQ');

    // Asegúrate de que las colas existen
    await channel.assertQueue('bookstore');
    await channel.assertQueue('authors');
    await channel.assertQueue('publishers');

    return { connection, channel };
  } catch (error) {
    // Captura de errores más detallada
    console.error('Error al conectar a RabbitMQ:', error.message);
    console.error('Stack Trace:', error.stack);
    throw error; // Lanzar el error nuevamente para que sea manejado en otro lugar si es necesario
  }
};

module.exports = connectRabbitMQ; */


/* import amqp from 'amqplib';
import dotenv from 'dotenv';

dotenv.config();

const RABBITMQ_URL = process.env.RABBITMQ_URL;

const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect(RABBITMQ_URL);
    console.log('Conectado a RabbitMQ en CloudAMQP');
    const channel = await connection.createChannel();
    console.log('Canal de comunicación creado en RabbitMQ');

    // Asegúrate de que las colas existen
    await channel.assertQueue('bookstore');
    await channel.assertQueue('authors');
    await channel.assertQueue('publishers');

    return { connection, channel };
  } catch (error) {
    console.error('Error al conectar a RabbitMQ:', error);
    throw error;
  }
};

export default connectRabbitMQ; */

/* const amqp = require('amqplib');
require('dotenv').config();

const RABBITMQ_URL = process.env.RABBITMQ_URL;

const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect(RABBITMQ_URL, { timeout: 10000 });
    console.log('Conectado a RabbitMQ en CloudAMQP');
    const channel = await connection.createChannel();
    console.log('Canal de comunicación creado en RabbitMQ');const amqp = require('amqplib');
    require('dotenv').config();
    
    const RABBITMQ_URL = process.env.RABBITMQ_URL;
    
    const connectRabbitMQ = async () => {
      try {
        const connection = await amqp.connect(RABBITMQ_URL);
        console.log('Conectado a RabbitMQ en CloudAMQP');
        const channel = await connection.createChannel();
        console.log('Canal de comunicación creado en RabbitMQ');
    
        // Configura y asegura que las colas existen
        await channel.assertQueue('bookstore');
        await channel.assertQueue('authors');
        await channel.assertQueue('publishers');
    
        return { connection, channel };
      } catch (error) {
        console.error('Error al conectar a RabbitMQ:', error.message);
        console.error('Stack trace:', error.stack);
        throw error;
      }
    };
    
    module.exports = connectRabbitMQ;
    

    // Configura y asegura que las colas existen
    await channel.assertQueue('bookstore');
    await channel.assertQueue('authors');
    await channel.assertQueue('publishers');

    return { connection, channel };
  } catch (error) {
    console.error('Error al conectar a RabbitMQ:', error);
    throw error;
  }
};

module.exports = connectRabbitMQ;
 */