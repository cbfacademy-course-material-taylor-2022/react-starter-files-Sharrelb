import React,{useState} from 'react';
import data from './models/books.json';
import BookList from './components/BookList'
import Header from './components/Header.';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './About'
import Search from './components/Search';


function App() {
  const [books] = useState(data);
  const [searchWord, setSearch] = useState('');
   
  async function findBooks(value){
    const url =  `https://www.googleapis.com/books/v1/volumes?q=${value}h&filter=paid-ebooks&print-type=books&projection=lite&orderBy=newest&maxResults=10&startIndex=0`;
  }


  function addBook(title){
    console.log(`The Book '${title}' was clicked`);
  }

  return(
    <Router>
        <Routes>
          <Route  path="/" element={
          <>   
              <Header />           
              <h2> Welcome to the Bookcase App</h2>
              <Search findBooks={findBooks} searchWord={searchWord} setSearch={setSearch}/>
              <BookList books={books} addBook={addBook} />
          </>
          } />
        </Routes>
        <Routes>
          <Route exact path="/bookcase" element={
          <>   
              <Header />           
              <h2> Welcome to the Bookcase App</h2>
          </>
          } />
        </Routes>
        <Routes>
          <Route exact path="/aboutus" element={
          <>   
              <Header />           
              <h2> Welcome to the Bookcase App</h2>
              <About />
          </>
          } />
        </Routes>
    </Router>)
}

export default App;

