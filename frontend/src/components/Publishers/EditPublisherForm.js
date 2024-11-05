import React, { useState } from 'react';
import { updatePublisher } from '../../api/publishersApi';

const EditPublisherForm = ({ publisher, onUpdate }) => {
  const [publisherData, setPublisherData] = useState(publisher);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPublisherData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!publisherData.name || !publisherData.location) {
      setError('Name and location are required.');
      return;
    }

    try {
      const updatedPublisher = await updatePublisher(publisherData.id, publisherData);
      onUpdate(updatedPublisher);
    } catch (err) {
      console.error('Error updating publisher:', err);
      setError('There was an error updating the publisher. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Publisher</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input
        type="text"
        name="name"
        value={publisherData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        value={publisherData.location}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="establishedYear"
        value={publisherData.establishedYear}
        onChange={handleChange}
      />
      
      <button type="submit">Update Publisher</button>
    </form>
  );
};

export default EditPublisherForm;
