import React from 'react';
import ReactDOM from 'react-dom/client';
//import Profile from './Profile';
import MyForm from './Form';



function App() {
  // return (
   //  <Profile name="Sharrel" bio=" Example of React node JSX"/>
 // );

    return(
    <div> 
      <MyForm />        
    </div>   )    
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

