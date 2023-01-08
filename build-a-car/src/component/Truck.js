import React from "react";

function Truck(props) {
  return (
    <>
      <h2>Hola, I am a Truck, I have {props.numberOfWheels} Wheels </h2>
      {props.showWheel(props.numberOfWheels)}
    </>
  );
}

export default Truck;
