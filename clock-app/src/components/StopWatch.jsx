import { useState } from "react";

const StopWatch=()=>{
    const [isRunning,setisRunning]=useState(false);
    function handleStarting(){
        setisRunning((pre)=>!pre);
    }

    return (
        <div>
<h1>StopWatch</h1>
<h3>Timer: </h3>
<button onClick={handleStarting}>{isRunning? 'stop':'start'}</button>
<button >Reset</button>
        </div>

    )
}
export default StopWatch;