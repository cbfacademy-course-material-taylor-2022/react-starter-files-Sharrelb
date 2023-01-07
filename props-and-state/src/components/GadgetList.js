import React from 'react';

const GadgetList = (props) => {
  const titleStyle = {"fontWeight":"bold"};
  const priceStyle = {"fontWeight":"bold", "color":"RED"};

  return (
    <main>
      <h2>Headphones</h2>
      {props.items.map((item) => (
      <div key={item.key}>             
        <p style={titleStyle} >{item.title}</p>
        <p style={priceStyle} >{item.price}</p>
        <img src={item.src} alt=''/>.
      </div>))}
    </main>
  );
}

export default GadgetList;
