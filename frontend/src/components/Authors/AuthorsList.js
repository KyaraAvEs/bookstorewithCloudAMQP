import React, { useEffect, useState } from 'react';
import { getAuthors } from '../../api/authorsApi'; // Asegúrate de que tienes esta función en authorsApi.js
import DeleteAuthor from './DeleteAuthor';

const AuthorsList = ({ onEdit }) => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(''); // Estado para manejo de errores
  const [page, setPage] = useState(1); // Estado de página para paginación
  const [totalPages, setTotalPages] = useState(1); // Total de páginas de la lista de autores

  useEffect(() => {
    const fetchAuthors = async () => {
      setLoading(true);
      setError(''); // Limpiar error previo

      try {
        const data = await getAuthors(page); // Obtener autores según la página actual
        setAuthors(data.authors);
        setTotalPages(data.totalPages); // Actualizar número total de páginas
      } catch (err) {
        console.error('Error fetching authors:', err);
        setError('There was an error loading the authors list. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, [page]); // Cambia la página cada vez que `page` cambia

  const handleNextPage = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return (
    <div>
      <h2>Authors List</h2>
      {loading && <p>Loading authors...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {!loading && !error && (
        <ul>
          {authors.map((author) => (
            <li key={author.id}>
              <h3>{author.author}</h3>
              <p>Nationality: {author.nationality}</p>
              <p>Fields: {author.fields}</p>
              <button onClick={() => onEdit(author)}>Edit</button>
              <DeleteAuthor authorId={author.id} onDelete={() => setAuthors(authors.filter((a) => a.id !== author.id))} />
            </li>
          ))}
        </ul>
      )}

      {/* Controles de paginación */}
      {!loading && !error && totalPages > 1 && (
        <div>
          <button onClick={handlePreviousPage} disabled={page === 1}>
            Previous
          </button>
          <span>Page {page} of {totalPages}</span>
          <button onClick={handleNextPage} disabled={page === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthorsList;
