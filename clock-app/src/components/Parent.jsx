import React, { createContext } from "react";
import Child1 from "./Child1";
const StudentContext=createContext();

const Parent = () => {
    const stu = {
        name: "Khushi",
        id: 1
    };

    return (
        <StudentContext.Provider value={stu}>
             <div>
            <h1>Parent Component</h1>
            {/* <Child1 student={stu} /> */}
            <Child1/>
        </div>

        </StudentContext.Provider>
       
    );
};
export {StudentContext}
export default Parent;
