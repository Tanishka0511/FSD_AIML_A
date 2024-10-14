// console.log(b)    //undefined
// b=10              //still undefined 
var b=10
console.log(b)     //10

var a=12
if(a>10){
    a=30
    var c=67
    console.log(a)   //30
    console.log(c)   //67
}
console.log(a)      //30
console.log(c)      //67

let d=12.5
if(d>10){
   d=40
   console.log(d);    //40
   let e=23;
   console.log(e);    //23
}
console.log(d)      //40
// console.log(e)    //ReferenceError: e is not defined

const f=10;
// f=60;              //TypeError: Assignment to constant variable.
console.log(f)      //10


console.log(typeof(a));  //number
console.log(typeof(d));  //number
g="Khushi";
console.log(typeof(g));    //string
h=null
console.log(typeof(h));    //object
let i;
console.log(typeof(i));   //undefined
j=true
console.log(typeof(j));   //boolean


// ==  and !=   -->   value comparison 
// ===  and !==  -->  value + type comparison

// single parameter function
function Hello(msg){
    console.log(msg);
}
Hello("Hello!!")    //Hello!!

const hello=(msg)=>{
    console.log(msg)
}
hello("Hello Guys!")  //Hello Guys!


const add=(a,b)=>{
    return a+b;
}
console.log(add(7,5));   //12
// in arrow function ,no context available



// Event handling 

// create copy of an object
const person ={
    name:"khushi",
    age:19,
}

const newperson =person    //assigned reference of previous object 
console.log(person.age); //19
newperson.age=20
console.log(person.age)   // 20

const secperson ={...person}   //make copy of person object
secperson.age=25;            //  it will not change age of person object
console.log(person.age)        //20
console.log(secperson.age)      //25


const thperson ={...person,city:"baraut"}    //copy object but with one more property
thperson.age=27;           //  it will not change age of person object
console.log(person)       //{ name: 'khushi', age: 20 }
console.log(thperson)     //{ name: 'khushi', age: 27, city: 'baraut' }



const fperson ={...person,name:"neel",city:"baraut"}     //overwrite the name 

console.log(person)       //{ name: 'khushi', age: 20 }
console.log(fperson)      //{ name: 'neel', age: 20, city: 'baraut' }
// cloning or coping is same for arrays


// Template Literals

const firstname="Tanishka"
const lastname="solanki"
console.log(firstname+" "+lastname);    //Tanishka solanki      //old way to add two strings    
console.log(`${firstname} ${lastname}`)  //Tanishka solanki     //this is called template literals



