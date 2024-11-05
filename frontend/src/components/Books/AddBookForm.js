import React, { useState } from 'react';
import { addBook } from '../../api/booksApi';

const AddBookForm = ({ onAdd }) => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    year_published: '',
    genre: '',
    pages: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!bookData.title || !bookData.author) {
      setError('Title and author are required.');
      return;
    }

    try {
      const newBook = await addBook(bookData);
      onAdd(newBook);
      setBookData({ title: '', author: '', year_published: '', genre: '', pages: '' });
    } catch (err) {
      console.error('Error adding book:', err);
      setError('There was an error adding the book. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Book</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={bookData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={bookData.author}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="year_published"
        placeholder="Year Published"
        value={bookData.year_published}
        onChange={handleChange}
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={bookData.genre}
        onChange={handleChange}
      />
      <input
        type="number"
        name="pages"
        placeholder="Pages"
        value={bookData.pages}
        onChange={handleChange}
      />
      
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
