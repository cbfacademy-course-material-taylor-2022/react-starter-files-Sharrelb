import React from "react";

function Greeting(props){
    return(
      <div>
        <h3>{props.name}!</h3>
        <p>{props.bio}</p>
      </div>
    )
}
export default  Greeting;