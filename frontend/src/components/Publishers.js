import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Publishers = () => {
  const [publishers, setPublishers] = useState([]);
  const navigate = useNavigate(); // Hook para manejar la navegación

  // Obtener editoriales al cargar el componente
  useEffect(() => {
    axios.get('/api/publishers')
      .then((response) => setPublishers(response.data))
      .catch((error) => console.error('Error fetching publishers:', error));
  }, []);

  const handleAddPublisher = () => {
    // Redirige a la página para agregar una nueva editorial
    navigate('/publishers/add');
  };

  const handleEditPublisher = (id) => {
    // Redirige a la página de edición de la editorial
    navigate(`/publishers/edit/${id}`);
  };

  const handleDeletePublisher = (id) => {
    axios.delete(`/api/publishers/${id}`)
      .then(() => {
        // Actualiza la lista de editoriales tras eliminar
        setPublishers(publishers.filter((publisher) => publisher.id !== id));
      })
      .catch((error) => console.error('Error deleting publisher:', error));
  };

  return (
    <div>
      <h2>Publishers</h2>
      <ul>
        {publishers.map((publisher) => (
          <li key={publisher.id}>
            {publisher.publisher}
            <button onClick={() => handleEditPublisher(publisher.id)}>Edit</button>
            <button onClick={() => handleDeletePublisher(publisher.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddPublisher}>Add Publisher</button>
    </div>
  );
};

export default Publishers;

/* // src/components/Publishers.js
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
 */