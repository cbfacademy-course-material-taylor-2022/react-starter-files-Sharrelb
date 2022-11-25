import React from 'react'
import { useState } from 'react'

const Search = (props) =>{
    const [searchWord, setSearch] = useState('');
    const [hasSubmitted,setSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
      }

    return <form onSubmit={(e) => handleSubmit(e)}>
         <label>Search <input type="text" value={searchWord} onChange={(e) => { setSearch(e.target.value); setSubmitted(false) }} /></label>
         <input type="submit" value="Submit" onSubmit={handleSubmit} id="submit-button"/>
        <p style ={{color:"red"}}><em>{props.searchWord && 'Key word Typed:' + searchWord}</em></p>

    </form>
}

export default Search;