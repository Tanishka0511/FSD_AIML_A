import React from "react";
import Child1 from "./Child1";

const Parent = () => {
    const stu = {
        name: "Khushi",
        id: 1
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <Child1 student={stu} />
        </div>
    );
};

export default Parent;
