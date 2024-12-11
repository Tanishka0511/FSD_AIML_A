import React, { useReducer } from "react"
const ReducerEX=()=>{
    // const initialValue=0;
    const initialValue={
        cnt:0
    }
    const [state,dispatch]=useReducer(reducer,initialValue)
    function reducer(state,action){
        switch(action.type){
            case 'add': return {cnt:state.cnt+1};
            case 'sub':return {cnt:state.cnt-1};
            case 'reset':return {cnt:0};
            default: throw new Error("unepected action");
        }

    }
    return (
        <div>
            <h1>
                Counter:{state.cnt}
            </h1>
            {/* <button onClick={()=>{dispatch("add")}}>Increment</button> */}
            <button onClick={()=>{dispatch({type:"add"})}}>Increment</button>
            {/* <button onClick={()=>{dispatch("sub")}}>Decrement</button> */}
            <button onClick={()=>{dispatch({type:"sub"})}}>Decrement</button>
            {/* <button onClick={()=>{dispatch("reset")}}>Reset</button> */}
            <button onClick={()=>{dispatch({type:"reset"})}}>Reset</button>
        </div>
    )
}
export default ReducerEX;