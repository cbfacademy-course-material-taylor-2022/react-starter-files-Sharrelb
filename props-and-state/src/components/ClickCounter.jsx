import React, { useState } from "react";

const ClickCounter = () => {
    const addStyle = {"background-color":"green"};
    const subStyle = {"background-color":"red", "margin":"0px 250px 0px"};
    const [count, setCount] = useState(0);

    return(
    <div>
    <h2>Count: {count}</h2>
     <div> Click the button below to imcrement the counter</div>
     <button style={addStyle} onClick={ () => setCount(count + 1 )}>Add</button>
    
     <button style={subStyle} onClick={ count => (count >= 0) ? setCount(count - 1 ): count}>Subtract</button>
    </div>);

}

export default ClickCounter