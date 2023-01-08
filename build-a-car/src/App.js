import './App.css';
import React from 'react'
import Car from "./component/Car"
import Bicycle from "./component/Bicycle"
import Bus from "./component/Bus";
import Truck from "./component/Truck"
import Skateboard from "./component/Skateboard";
import Wheel from './component/Wheel';

function App() {


  const showWheels = (numberOfWheels) => {
    
    const wheels = [];
    for (let i = 0; i < numberOfWheels ; i++) {
      wheels.push(<Wheel />);
      
    }
     return wheels
  }

  return (
    <div className="App">
      <header className="App-header">
        <Car numberOfWheels="4" showWheel={showWheels}/>
        <Bicycle numberOfWheels="2" showWheel={showWheels}/>
        <Bus numberOfWheels ="6" showWheel={showWheels}/>
        <Truck numberOfWheels ="8" showWheel={showWheels}/>
        <Skateboard numberOfWheels ="4" showWheel={showWheels}/>
      </header>
    </div>
  );
}

export default App;
