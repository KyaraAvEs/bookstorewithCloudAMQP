import React from 'react';
import { deleteBook } from '../../api/booksApi';

const DeleteBook = ({ bookId, onDelete }) => {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await deleteBook(bookId);
        onDelete();
      } catch (err) {
        console.error('Error deleting book:', err);
        alert('There was an error deleting the book. Please try again.');
      }
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteBook;
