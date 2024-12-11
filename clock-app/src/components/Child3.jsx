import React from "react";

const Child3 = ({ student }) => {
    return (
        <div>
            <h1>Child3 Component</h1>
            <h3>{student.name}</h3>
            <h3>{student.id}</h3>
        </div>
    );
};

export default Child3;
