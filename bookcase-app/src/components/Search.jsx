import React from "react";

const Search = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
    props.findBooks(props.searchWord);
  }

  return (
    <div className="searchBar">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          <input
            type="text"
            value={props.searchWord}
            onChange={(e) => {
              props.setSearch(e.target.value);
            }}
          />
        </label>
        <input
          type="submit"
          value="Submit"
          onSubmit={handleSubmit}
          id="submit-button"
        />
        <h1>
          <em>
            {props.searchWord && "Searching for keyword:" + props.searchWord}
          </em>
        </h1>
      </form>
    </div>
  );
};

export default Search;

