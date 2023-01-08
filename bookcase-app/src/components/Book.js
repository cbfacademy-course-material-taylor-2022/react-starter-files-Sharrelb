import React from "react";
import PropTypes from "prop-types";
import "../App.css";

function Book(props) {

  const {
    id,
    saleInfo: { retailPrice },
    volumeInfo: {
      title,
      authors,
      description,
      imageLinks: { thumbnail },
    },
  } = props.book;
  return (
    <main>
    <div className="bookContainer">
      <div key={id} className="bookImg">
        <img src={thumbnail} alt={title} />
        </div>
        <div className="bookDetail">
          <h2>{title}</h2>
          <h4>by {authors ? authors.join(",") : "No Authors Listed"}</h4>
          {retailPrice && <p> £{retailPrice.amount}</p>}
        <div  className="description">
          {description && <p>{description.substring(0,300)+("...")}</p>}
        </div>
        </div> 
         
        <div >
        
          <button className="addBtn" type="button" onClick={() => props.addBook(title)}>
            Add +
          </button>
        </div>
    
      </div>
    </main>
  );
}

//Validation
Book.propTypes = {
  volumeInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
  	authors: PropTypes.array.isRequired,
  	description: PropTypes.string.isRequired,
    imageLinks: PropTypes.shape({
      "thumbnail": PropTypes.string.isRequired
    })
  }),
  saleInfo: PropTypes.shape({
  	retailPrice: PropTypes.shape({
      "amount": PropTypes.number.isRequired 
    })
  })
};

export default Book;
