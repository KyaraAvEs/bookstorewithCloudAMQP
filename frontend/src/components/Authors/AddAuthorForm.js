// src/components/Authors/AddAuthorForm.js
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthorData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAuthor = await addAuthor(authorData);
    onAdd(newAuthor);
    setAuthorData({
      author: '',
      nationality: '',
      birth_year: '',
      fields: '',
      books: []
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Author</h2>
      <input type="text" name="author" placeholder="Author Name" value={authorData.author} onChange={handleChange} required />
      <input type="text" name="nationality" placeholder="Nationality" value={authorData.nationality} onChange={handleChange} />
      <input type="number" name="birth_year" placeholder="Birth Year" value={authorData.birth_year} onChange={handleChange} />
      <input type="text" name="fields" placeholder="Fields" value={authorData.fields} onChange={handleChange} />
      <button type="submit">Add Author</button>
    </form>
  );
};

export default AddAuthorForm;
