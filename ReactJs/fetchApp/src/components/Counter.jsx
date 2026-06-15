import { useState } from "react";

function Counter() {
  const [variable, setVariable] = useState(0);
  function upVariable() {
    variable != 10 && setVariable(variable+1);
    console.log(variable);
    
  }
  function downVariable() {
    variable != 0 && setVariable(variable - 1);
  }
  return (
    <div className="counter">
      <h1>{variable}</h1>
      <button onClick={upVariable} style={{backgroundColor:"green"}}>Up</button>
      <button onClick={downVariable} style={{backgroundColor:"red"}}>Down</button>
    </div>
  );
}

export default Counter;
