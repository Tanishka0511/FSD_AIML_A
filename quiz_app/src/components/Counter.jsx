import React , { useState } from 'react'
const Counter=()=>{
    const[count,setCount]=useState(0);

    function handleincrease(){
        setCount(count+1)
    }
    function handledecrease(){
        setCount(count-1)
    }
    return(

        <div>
            <h1>Counter:{count}</h1>
            <button onClick={handleincrease}>increase</button>
            <button onClick={handledecrease}>decrease</button>
        </div>
    )
        
    
}
export default Counter