import './App.css';
import React, { useState } from 'react';

function AddBook() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState([]);

  const handleBook = (event) => {
    setName(event.target.value);
  };

  const handleAuthor = (ev) => {
    setAuthor(ev.target.value);
  };

  const handleDelete = (index) => {
    const deleteBooks = [...books];
    deleteBooks.splice(index, 1);
    setBooks(deleteBooks);
  };

  const handleReadClick = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].readStatus = !updatedBooks[index].readStatus;
    setBooks(updatedBooks);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const updatedBooks = [...books, { name: name, author: author, readStatus: false }];
    setBooks(updatedBooks);
    setName('');
    setAuthor('');
  };

  return (
    <div className='formcon'>
      <form>
        <label htmlFor="name">Title:</label>
        <input
          type="text"
          placeholder='Enter Book name'
          value={name}
          onChange={handleBook}
          required
        />
        <label htmlFor="author">Author:</label>
        <input 
          type='text'
          placeholder='Enter author name'
          value={author}
          onChange={handleAuthor}
          required
        />
        <button className="submitBtn" onClick={handleClick}>Submit</button>
      </form>
      {books.map((book, index) => (
          <li className="content" style={{ backgroundColor: book.readStatus ? 'green' : 'red' }}>
          <h3>{book.name}</h3>
          <p>{book.author}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
          <button className="toggle" onClick={() => handleReadClick(index)}>
            {book.readStatus ? "unRead" : "Read "}
          </button>
        </li>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Book Library App</h1>
      <AddBook/>
    </div>
  );
}

export default App;
