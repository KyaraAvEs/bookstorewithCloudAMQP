import React, { useState } from 'react';
import { deleteAuthor } from '../../api/authorsApi';

const DeleteAuthor = ({ authorId, onDelete }) => {
  const [error, setError] = useState(''); // Estado para manejar errores

  const handleDelete = async () => {
    const isConfirmed = window.confirm('Are you sure you want to delete this author?');

    if (isConfirmed) {
      try {
        await deleteAuthor(authorId);
        onDelete();
      } catch (err) {
        console.error('Error deleting author:', err);
        setError('There was an error deleting the author. Please try again.');
      }
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default DeleteAuthor;
