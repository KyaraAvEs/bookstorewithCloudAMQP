import React, { useEffect, useState } from 'react';
import { getPublishers } from '../../api/publishersApi';
import DeletePublisher from './DeletePublisher';

const PublishersList = ({ onEdit }) => {
  const [publishers, setPublishers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPublishers = async () => {
      try {
        const data = await getPublishers();
        setPublishers(data);
      } catch (err) {
        console.error('Error fetching publishers:', err);
        setError('There was an error loading the publishers.');
      } finally {
        setLoading(false);
      }
    };
    fetchPublishers();
  }, []);

  if (loading) return <p>Loading publishers...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Publishers List</h2>
      <ul>
        {publishers.map((publisher) => (
          <li key={publisher.id}>
            <h3>{publisher.name}</h3>
            <p>Location: {publisher.location}</p>
            <button onClick={() => onEdit(publisher)}>Edit</button>
            <DeletePublisher publisherId={publisher.id} onDelete={() => setPublishers(publishers.filter(p => p.id !== publisher.id))} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublishersList;
