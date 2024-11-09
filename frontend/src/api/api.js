// src/api/api.js

import axios from 'axios';

// Configuración global de Axios
const api = axios.create({
  baseURL: 'http://localhost:3001', // Cambia esta URL si tu backend está en otro puerto o dominio
});

// Puedes agregar más configuraciones globales, como cabeceras, interceptores, etc.
api.defaults.headers.common['Authorization'] = 'Bearer token'; // Ejemplo de token de autorización

export default api;
