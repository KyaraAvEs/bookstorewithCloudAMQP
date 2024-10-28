// src/components/Books.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Books = () => {
  const [books, setBooks] = useState([]);

  // Obtener libros al cargar el componente
  useEffect(() => {
    axios.get('/api/books').then((response) => setBooks(response.data));
  }, []);

  const addBook = () => {
    // Lógica para agregar un libro
  };

  const editBook = (id) => {
    // Lógica para editar un libro
  };

  const deleteBook = (id) => {
    axios.delete(`/api/books/${id}`).then(() => {
      setBooks(books.filter((book) => book.id !== id));
    });
  };

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} (Publisher: {book.publisher})
            <button onClick={() => editBook(book.id)}>Edit</button>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={addBook}>Add Book</button>
    </div>
  );
};

export default Books;
