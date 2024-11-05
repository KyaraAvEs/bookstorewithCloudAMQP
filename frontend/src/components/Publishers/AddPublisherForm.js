import React, { useState } from 'react';
import { addPublisher } from '../../api/publishersApi';

const AddPublisherForm = ({ onAdd }) => {
  const [publisherData, setPublisherData] = useState({
    name: '',
    location: '',
    establishedYear: '',
  });
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
      const newPublisher = await addPublisher(publisherData);
      onAdd(newPublisher);
      setPublisherData({ name: '', location: '', establishedYear: '' });
    } catch (err) {
      console.error('Error adding publisher:', err);
      setError('There was an error adding the publisher. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Publisher</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={publisherData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={publisherData.location}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="establishedYear"
        placeholder="Established Year"
        value={publisherData.establishedYear}
        onChange={handleChange}
      />
      
      <button type="submit">Add Publisher</button>
    </form>
  );
};

export default AddPublisherForm;
