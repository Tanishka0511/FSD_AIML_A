const parent =document.getElementById("root");
const element = React.createElement("h1",{},"This is new heading");
const root=ReactDOM.createRoot(parent);
    // root.render(element);             // overwrite so we used arrays 

const element2=React.createElement("h2",{},"Shopping cart");

const item1=React.createElement("li",{},"clothes");
const item2=React.createElement("li",{},"jewellery");
const list=React.createElement("ul",{},item1,item2);

const para=React.createElement("p",{},"This is paragraph");    //can used simple html by using babeljs.io cdn
const para2=<p>This is new paragraph</p>
root.render([element,element2,list,para,para2])


