import React from 'react';
import PropTypes from 'prop-types'

function addBook(title){
  console.log(`The Book '${title}' was clicked`);
}

function Book({
  book:{id,
       saleInfo: {retailPrice},  
       volumeInfo:{
         title,
         authors,
         description,
         imageLinks: {thumbnail},
        }}}) {
 
  return(<main>
    <div className="book">
      <img src={thumbnail} alt={title}/>
    </div>
    <div>
      <h2>{title}</h2>
    </div>
    <p>by {authors ? authors.join(',') : "No Authors Listed"}</p>
    {retailPrice && <p> £{retailPrice.amount}</p>}
    {description && <p>{description}</p>}
    <div> 
    <button type="button" onClick={() => addBook(title)}>Add +</button>
    </div>
      
    </main>);
  }
export default Book
