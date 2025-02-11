import React, { useRef, useState } from "react";
const RefEx=()=>{
    const count=useRef(0);
    const [count1,setCount1]=useState(0);

    console.log("obj render");
    function increment(){
        count.current++;
        setCount1(count1+1);
        
    }
    return(

        <div>
            <h1>
                Ref Counter :{count.current}</h1>
       <h1>         useState Counter :{count1}
            </h1>
            <button onClick={increment}>Increment</button>
        </div>
    )

}
export default RefEx;