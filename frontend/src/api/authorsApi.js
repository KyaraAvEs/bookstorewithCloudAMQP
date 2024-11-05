// src/api/authorsApi.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5672/api/authors';

export const getAuthors = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching authors:', error);
    throw error;
  }
};

export const addAuthor = async (authorData) => {
  try {
    const response = await axios.post(API_BASE_URL, authorData);
    return response.data;
  } catch (error) {
    console.error('Error adding author:', error);
    throw error;
  }
};

export const updateAuthor = async (id, authorData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, authorData);
    return response.data;
  } catch (error) {
    console.error('Error updating author:', error);
    throw error;
  }
};

export const deleteAuthor = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting author:', error);
    throw error;
  }
};
