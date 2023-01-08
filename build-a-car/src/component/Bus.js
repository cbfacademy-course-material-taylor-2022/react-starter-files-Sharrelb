import React from "react";

function Bus(props){

        return (
                <>
        <h2>Hello, I am a Bus! I have {props.numberOfWheels} Wheels</h2>
        {props.showWheel(props.numberOfWheels)}</>)
}

export default Bus;

