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