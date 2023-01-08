

import React from "react";

function Bicycle(props){

        return(
        <>
           <h2>Good Morning, I have {props.numberOfWheels} Wheels</h2>
           {props.showWheel(props.numberOfWheels)}
        </> )
}

export default Bicycle;