// src/App.js
import React from 'react';
import Authors from './components/Authors';
import Books from './components/Books';
import Publishers from './components/Publishers';

const App = () => (
  <div>
    <h1>Bookstore Management</h1>
    <Authors />
    <Publishers />
    <Books />
  </div>
);

export default App;
