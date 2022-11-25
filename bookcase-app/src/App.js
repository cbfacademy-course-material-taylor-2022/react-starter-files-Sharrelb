import React,{useState} from 'react';
import data from './models/books.json';
import BookList from './components/BookList'
import Header from './components/Header.';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './About'


function App() {
  const [books] = useState(data);
  
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

