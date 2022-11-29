import React from "react"
//import Wheel from "./Wheel";

function Car(props){
    
    return  <> <h2>Hi, I am a Car! I have {props.numberOfWheels} Wheels</h2>;
    {props.showWheels(props.numberOfWheels)}</>
}

export default Car;