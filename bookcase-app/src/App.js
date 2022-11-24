import React,{useState} from 'react';
import data from './models/books.json';
import BookList from './components/BookList'


function App() {
  const [books] = useState(data);
  
  function addBook(title){
    console.log(`The Book '${title}' was clicked`);
  }

  return <BookList books={books} addBook={addBook} />
}

export default App;

