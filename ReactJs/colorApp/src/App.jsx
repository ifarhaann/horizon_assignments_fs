import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div className="screen" style={{ backgroundColor: color }}>
        <div className="bar">
          <button 
          onClick={()=> setColor("red")}
          style={{ backgroundColor: "red", color: "white" }}>
            Red
          </button>
          <button 
          onClick={()=> setColor("violet")}
          style={{ backgroundColor: "violet", color: "white" }}>
            Violet
          </button>
          <button 
          onClick={()=> setColor("orange")}
          style={{ backgroundColor: "Orange", color: "white" }}>
            Orange
          </button>
          <button 
          onClick={()=> setColor("green")}
          style={{ backgroundColor: "Green", color: "white" }}>
            Green
          </button>
          <button 
          onClick={()=> setColor("blue")}
          style={{ backgroundColor: "Blue", color: "white" }}>
            Blue
          </button>
        </div>
      </div>
    </>
  );
}
export default App;
