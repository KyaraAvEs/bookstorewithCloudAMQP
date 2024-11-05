import React, { useState } from 'react';
import { updateAuthor } from '../../api/authorsApi';

const EditAuthorForm = ({ author, onUpdate }) => {
  const [authorData, setAuthorData] = useState(author);
  const [error, setError] = useState(''); // Estado para manejar errores

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthorData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validación básica de campos requeridos
    if (!authorData.author || !authorData.nationality) {
      setError('Author name and nationality are required.');
      return;
    }

    try {
      const updatedAuthor = await updateAuthor(authorData.id, authorData);
      onUpdate(updatedAuthor);
    } catch (err) {
      console.error('Error updating author:', err);
      setError('There was an error updating the author. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Author</h2>
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
      />
      
      <input
        type="text"
        name="fields"
        placeholder="Fields"
        value={authorData.fields}
        onChange={handleChange}
      />
      
      <button type="submit">Update Author</button>
    </form>
  );
};

export default EditAuthorForm;
