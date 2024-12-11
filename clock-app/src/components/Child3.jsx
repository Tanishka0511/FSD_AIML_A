import React, { useContext } from "react";
import { StudentContext } from "./Parent";
const Child3 = () => {
    const student=useContext(StudentContext)
    return (
        <div>
            <h1>Child3 Component</h1>
            <h3>{student.name}</h3>
            <h3>{student.id}</h3>
        </div>
    );
};

export default Child3;
