// src/components/Authors.js
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
