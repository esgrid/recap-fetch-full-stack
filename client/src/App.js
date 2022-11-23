import './App.css';
import { useState, useEffect } from 'react'
import Book from './Book';


function App() {

  const [error, setError] = useState(null)
  const [books, setBooks] = useState([])
  const [newBook, setNewBook] = useState({
    title: '',
    author: ''
  })

  // useEffect(anEffect, [optional variables])
  useEffect(() => {
    fetch('http://localhost:5000/books')
    .then(res => res.json())
    .then(res => {
      setBooks(res.books)
    }, error => {
      setError(error)
    })
  }, [])

  useEffect(() => {
    if(newBook.title !== '' && newBook.author !== ''){
      fetch('http://localhost:5000/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBook)
      })
      .then(res => res.json())
      .then(res => setBooks(res.books), error => setError(error))
    }
  }, [newBook])


  function handleClick(){
    setNewBook({
      title: document.getElementById('title').value,
      author: document.getElementById('author').value
    })
  }

  if(error){
    return <div className="book">Error {error.message}</div>
  } else {
    return(
      <>
        <input type='text' placeholder='Title' id='title'/>
        <input type='text' placeholder='Author' id='author'/>
        <button onClick={handleClick}>Add Book</button>
        {/* map through array of books and display using a component */}
        {books.map( (book, key) => <Book title={book.title} author={book.author} key={key} />)}
      </>
    )
  }
}

export default App;
