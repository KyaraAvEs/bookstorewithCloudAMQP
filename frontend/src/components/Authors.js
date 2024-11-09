import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate(); // Hook para manejar la navegación

  useEffect(() => {
    axios.get('/api/authors')
      .then((response) => setAuthors(response.data))
      .catch((error) => console.error('Error fetching authors:', error));
  }, []);

  const handleAddAuthor = () => {
    // Redirige a la página para agregar un nuevo autor
    navigate('/authors/add');
  };

  const handleEditAuthor = (id) => {
    // Redirige a la página de edición del autor
    navigate(`/authors/edit/${id}`);
  };

  const handleDeleteAuthor = (id) => {
    axios.delete(`/api/authors/${id}`)
      .then(() => {
        // Actualiza la lista de autores tras eliminar
        setAuthors(authors.filter((author) => author.id !== id));
      })
      .catch((error) => console.error('Error deleting author:', error));
  };

  return (
    <div>
      <h2>Authors</h2>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            {author.author}
            <button onClick={() => handleEditAuthor(author.id)}>Edit</button>
            <button onClick={() => handleDeleteAuthor(author.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddAuthor}>Add Author</button>
    </div>
  );
};

export default Authors;



/* // src/components/Authors.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get('/api/authors').then((response) => setAuthors(response.data));
  }, []);

  const addAuthor = () => {
    // Lógica para agregar un autor
  };

  const editAuthor = (id) => {
    // Lógica para editar un autor
  };

  const deleteAuthor = (id) => {
    axios.delete(`/api/authors/${id}`).then(() => {
      setAuthors(authors.filter((author) => author.id !== id));
    });
  };

  return (
    <div>
      <h2>Authors</h2>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            {author.author}
            <button onClick={() => editAuthor(author.id)}>Edit</button>
            <button onClick={() => deleteAuthor(author.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={addAuthor}>Add Author</button>
    </div>
  );
};

export default Authors;
 */