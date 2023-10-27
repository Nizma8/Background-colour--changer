import { useState } from "react";
import "./App.css";

function App() {

  const [backgroundColor,setBackGroundColor] = useState("#ffffff")
  
  return (
    <div className="App">
      <div className="colorchange">
        <div className=" w-25 colours container pt-5 ps-5 ">
          <button className="  rounded" style={{ backgroundColor: " #FFDA03" }} onClick={()=>{setBackGroundColor( "#FFDA03" )}}>
            <p className="text-white">YELLOW</p>
          </button>
          <button className=" rounded" style={{ backgroundColor: " #696C9F" }} onClick={()=>{setBackGroundColor( "#696C9F" )}}>
            <p className="text-white">BLUE</p>
          </button>
          <button className=" rounded" style={{ backgroundColor: " #F08080" }} onClick={()=>{setBackGroundColor( "#F08080" )}}>
            <p className="text-white">ROSE</p>
          </button>
          <button className="  rounded" style={{ backgroundColor: " #FF8D21" }} onClick={()=>{setBackGroundColor( " #FF8D21" )}}>
            <p className="text-white">ORANGE</p>
          </button>
          <button className="  rounded" style={{ backgroundColor: " #FF2130" }} onClick={()=>{setBackGroundColor( " #FF2130" )}}>
            <p className="text-white ">RED</p>
          </button>
          
        </div>

        <div className="square shadow-lg rounded" style={{backgroundColor:backgroundColor}}> </div>
      </div>
    </div>
  );
}

export default App;
