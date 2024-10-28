// src/components/Publishers.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Publishers = () => {
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    axios.get('/api/publishers').then((response) => setPublishers(response.data));
  }, []);

  const addPublisher = () => {
    // Lógica para agregar una editorial
  };

  const editPublisher = (id) => {
    // Lógica para editar una editorial
  };

  const deletePublisher = (id) => {
    axios.delete(`/api/publishers/${id}`).then(() => {
      setPublishers(publishers.filter((publisher) => publisher.id !== id));
    });
  };

  return (
    <div>
      <h2>Publishers</h2>
      <ul>
        {publishers.map((publisher) => (
          <li key={publisher.id}>
            {publisher.publisher}
            <button onClick={() => editPublisher(publisher.id)}>Edit</button>
            <button onClick={() => deletePublisher(publisher.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={addPublisher}>Add Publisher</button>
    </div>
  );
};

export default Publishers;
