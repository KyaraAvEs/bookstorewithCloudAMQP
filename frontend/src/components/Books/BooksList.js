import React, { useEffect, useState } from 'react';
import { getBooks } from '../../api/booksApi';
import DeleteBook from './DeleteBook';

const BooksList = ({ onEdit }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (err) {
        console.error('Error fetching books:', err);
        setError('There was an error loading the books.');
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Books List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <button onClick={() => onEdit(book)}>Edit</button>
            <DeleteBook bookId={book.id} onDelete={() => setBooks(books.filter(b => b.id !== book.id))} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;

