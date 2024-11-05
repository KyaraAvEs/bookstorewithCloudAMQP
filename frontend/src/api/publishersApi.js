// src/api/publishersApi.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5672/api/publishers';

export const getPublishers = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching publishers:', error);
    throw error;
  }
};

export const addPublisher = async (publisherData) => {
  try {
    const response = await axios.post(API_BASE_URL, publisherData);
    return response.data;
  } catch (error) {
    console.error('Error adding publisher:', error);
    throw error;
  }
};

export const updatePublisher = async (id, publisherData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, publisherData);
    return response.data;
  } catch (error) {
    console.error('Error updating publisher:', error);
    throw error;
  }
};

export const deletePublisher = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting publisher:', error);
    throw error;
  }
};
