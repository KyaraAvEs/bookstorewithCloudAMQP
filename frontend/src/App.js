// src/App.js
import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Authors from './components/Authors';
import AddAuthorForm from './components/Authors/AddAuthorForm';
import AuthorsList from './components/Authors/AuthorsList';
import EditAuthorForm from './components/Authors/EditAuthorForm';
import Books from './components/Books';
import AddBookForm from './components/Books/AddBookForm';
import BooksList from './components/Books/BooksList';
import EditBookForm from './components/Books/EditBookForm';
import Publishers from './components/Publishers';
import AddPublisherForm from './components/Publishers/AddPublisherForm';
import EditPublisherForm from './components/Publishers/EditPublisherForm';
import PublishersList from './components/Publishers/PublishersList';
const App = () => (
  <Router>
    <div>
      <h1>Bookstore Management</h1>
      <nav>
        <ul>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/publishers">Publishers</Link></li>
          <li><Link to="/books">Books</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/authors" element={<Authors />} />
        <Route path="/authors/add" element={<AddAuthorForm />} />
        <Route path="/authors/edit/:id" element={<EditAuthorForm />} />
        <Route path="/authors/list" element={<AuthorsList />} />
        <Route path="/publishers" element={<Publishers />} />
        <Route path="/publishers/add" element={<AddPublisherForm />} />
        <Route path="/publishers/edit/:id" element={<EditPublisherForm />} />
        <Route path="/publishers/list" element={<PublishersList />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/add" element={<AddBookForm />} />
        <Route path="/books/edit/:id" element={<EditBookForm />} />
        <Route path="/books/list" element={<BooksList />} />
      </Routes>
    </div>
  </Router>
);

export default App;

/* // src/App.js
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
 */