import React, { useState } from 'react';
import { addAuthor } from '../../api/authorsApi';

const AddAuthorForm = ({ onAdd }) => {
  const [authorData, setAuthorData] = useState({
    author: '',
    nationality: '',
    birth_year: '',
    fields: '',
    books: []
  });

  const [error, setError] = useState(''); // Estado para manejar errores

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthorData((prev) => ({ ...prev, [name]: value }));
  };

  // Función de validación
  const validateForm = () => {
    if (!authorData.author || !authorData.nationality || !authorData.birth_year || !authorData.fields) {
      setError('Please fill out all required fields.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar formulario antes de enviar
    if (!validateForm()) {
      return;
    }

    try {
      const newAuthor = await addAuthor(authorData);
      onAdd(newAuthor);
      setAuthorData({
        author: '',
        nationality: '',
        birth_year: '',
        fields: '',
        books: []
      });
      setError(''); // Limpiar el error en caso de éxito
    } catch (err) {
      console.error('Error adding author:', err);
      setError('There was an error adding the author. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Author</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        name="author"
        placeholder="Author Name"
        value={authorData.author}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="nationality"
        placeholder="Nationality"
        value={authorData.nationality}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="birth_year"
        placeholder="Birth Year"
        value={authorData.birth_year}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="fields"
        placeholder="Fields"
        value={authorData.fields}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Author</button>
    </form>
  );
};

export default AddAuthorForm;
