import React from "react"


function Car(props){
 
    return  (
    <> 
        <h2>Hi, I am a Car! I have {props.numberOfWheels} Wheels</h2> 
       
        {props.showWheel(props.numberOfWheels)}
    </>
 )}

export default Car;