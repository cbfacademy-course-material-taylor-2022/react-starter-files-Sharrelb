import React from "react"

function Skateboard(props){
    
    return (<>
        <h2>Hey, I'm a Skateboard, I have {props.numberOfWheels} Wheels</h2>
        {props.showWheel(props.numberOfWheels)}
    </>)
}

export default Skateboard;