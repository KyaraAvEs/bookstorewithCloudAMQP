import React from 'react';
import { deletePublisher } from '../../api/publishersApi';

const DeletePublisher = ({ publisherId, onDelete }) => {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this publisher?')) {
      try {
        await deletePublisher(publisherId);
        onDelete();
      } catch (err) {
        console.error('Error deleting publisher:', err);
        alert('There was an error deleting the publisher. Please try again.');
      }
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeletePublisher;
