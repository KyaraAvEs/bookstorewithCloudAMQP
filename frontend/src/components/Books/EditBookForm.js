import React, { useState } from 'react';
import { updateBook } from '../../api/booksApi';

const EditBookForm = ({ book, onUpdate }) => {
  const [bookData, setBookData] = useState(book);
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
      const updatedBook = await updateBook(bookData.id, bookData);
      onUpdate(updatedBook);
    } catch (err) {
      console.error('Error updating book:', err);
      setError('There was an error updating the book. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Book</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input
        type="text"
        name="title"
        value={bookData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        value={bookData.author}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="year_published"
        value={bookData.year_published}
        onChange={handleChange}
      />
      <input
        type="text"
        name="genre"
        value={bookData.genre}
        onChange={handleChange}
      />
      <input
        type="number"
        name="pages"
        value={bookData.pages}
        onChange={handleChange}
      />
      
      <button type="submit">Update Book</button>
    </form>
  );
};

export default EditBookForm;
