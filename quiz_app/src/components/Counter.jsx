import React , {useEffect, useState } from 'react'
const Counter=()=>{
    const[count,setCount]=useState(0);
    const[count1,setCount1]=useState(0);

    function handleincrease(){
        setCount(count+1)
    }
    function handledecrease(){

        setCount(count-1)
    }
    useEffect(()=>{
        setCount1(count*2)
    })
    return(

        <div>
            <h1>Counter:{count}</h1>
            <button onClick={handleincrease}>increase</button>
            <button onClick={handledecrease}>decrease</button>
            <h1>Conter1:{count1}</h1>
        </div>
    )
        
    
}
export default Counter