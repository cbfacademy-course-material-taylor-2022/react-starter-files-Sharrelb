import React, {useState} from "react";
import Greeting from './Greeting'

function MyForm() {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [formSubmitted, setFormSubmitted] = React.useState(false);
      
    const handleSubmit = (event) => {
      event.preventDefault();
      setFormSubmitted(true);
      //const element2 = document.getElementById("Name");
     // element2.innerHTML = name;

     // const element1 = document.getElementById("Bio");
      //element1.innerHTML = bio ;
}  
  
    return (
      <>
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>Enter your bio:
          <input 
            type="text" 
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>

      {formSubmitted &&  <Greeting  name={name} bio={bio}/>}
      </>
    )
  }

  export default MyForm