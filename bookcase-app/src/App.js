import React, { useState } from "react";
import data from "./models/books.json";
import BookList from "./components/BookList";
import Header from "./components/Header.";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [books, setBooks] = useState(data);
  const [searchWord, setSearch] = useState("");

  async function findBooks(value) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  function addBook(title) {
    
    console.log(`The Book '${title}' was clicked`);
  }

  return (
    <Router>
      <div className="mainContainer">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Search
                  findBooks={findBooks}
                  searchWord={searchWord}
                  setSearch={setSearch}
                />
                <BookList books={books} addBook={addBook} />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/bookcase"
            element={
              <>
                <Header />
                <h2> Welcome to the Bookcase App</h2>
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/about"
            element={
              <>
                <Header />
                <h2> Welcome to the Bookcase App</h2>
                <About />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
