import React ,{ useState } from "react";
const Image =()=>{
    const[color,setColor]=useState("white");
    const [height,setHeight]=useState("200px");
    function changebackgrouncolor(){
        setColor("red");
    }
    function changeHeight(){
        setHeight("400px");
    }
    return(
       
        <div style={{ border: "2px solid black" ,backgroundColor: color }}>
            <img src="https://img.freepik.com/free-psd/gerbera-daisy-flower-png-isolated-transparent-background_191095-11452.jpg" alt="not found" style={{height:height}}/>

            <button onClick={changebackgrouncolor}>Change backgroundColor</button>
            <button onClick={changeHeight}>Change height</button>
        </div>
    )
}
export default Image