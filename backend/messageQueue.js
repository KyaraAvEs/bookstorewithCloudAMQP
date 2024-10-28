const amqp = require('amqplib');
const Author = require('./models/Author'); // Modelo de autores
const Publisher = require('./models/Publisher'); // Modelo de editoriales

// Configuración de la conexión AMQP
const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqps://smczupur:ab7qbZqhEorf2cEqe3QJMv7uk7bRoAlc@cow.rmq2.cloudamqp.com/smczupur';
const QUEUE_NAME = 'bookstore';

// Función para procesar cada mensaje recibido
const processMessage = async (message) => {
  const { action, entity, id, data } = message;

  try {
    if (entity === "author") {
      switch (action) {
        case "add":
          const newAuthor = new Author(data);
          await newAuthor.save();
          console.log("Autor agregado:", newAuthor);
          break;

        case "update":
          const updatedAuthor = await Author.findByIdAndUpdate(id, data, { new: true });
          if (updatedAuthor) {
            console.log("Autor actualizado:", updatedAuthor);
          } else {
            console.log("No se encontró el autor para actualizar con ID:", id);
          }
          break;

        case "delete":
          const deletedAuthor = await Author.findByIdAndDelete(id);
          if (deletedAuthor) {
            console.log("Autor eliminado:", deletedAuthor);
          } else {
            console.log("No se encontró el autor para eliminar con ID:", id);
          }
          break;

        default:
          console.error("Acción desconocida:", action);
      }
    } else if (entity === "publisher") {
      switch (action) {
        case "add":
          const newPublisher = new Publisher(data);
          await newPublisher.save();
          console.log("Editorial agregada:", newPublisher);
          break;

        case "update":
          const updatedPublisher = await Publisher.findByIdAndUpdate(id, data, { new: true });
          if (updatedPublisher) {
            console.log("Editorial actualizada:", updatedPublisher);
          } else {
            console.log("No se encontró la editorial para actualizar con ID:", id);
          }
          break;

        case "delete":
          const deletedPublisher = await Publisher.findByIdAndDelete(id);
          if (deletedPublisher) {
            console.log("Editorial eliminada:", deletedPublisher);
          } else {
            console.log("No se encontró la editorial para eliminar con ID:", id);
          }
          break;

        default:
          console.error("Acción desconocida:", action);
      }
    } else {
      console.error("Entidad desconocida:", entity);
    }
  } catch (error) {
    console.error("Error procesando el mensaje:", error);
  }
};

// Función para recibir mensajes de la cola y procesarlos
const receiveMessages = async () => {
  try {
    const connection = await amqp.connect(RABBITMQ_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue(QUEUE_NAME, { durable: true });

    console.log(`Esperando mensajes en la cola: ${QUEUE_NAME}`);

    channel.consume(QUEUE_NAME, async (msg) => {
      if (msg !== null) {
        const messageContent = JSON.parse(msg.content.toString());
        await processMessage(messageContent);
        channel.ack(msg);
      }
    });
  } catch (error) {
    console.error("Error al recibir mensajes:", error);
  }
};

// Inicia la recepción de mensajes
receiveMessages();
