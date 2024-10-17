// used for asynchronous programming
// pending reject resolve
const mypromise=new Promise((resolve,reject)=>{
    console.log("execute promise");
    resolve();

})
mypromise.then(()=>{
    console.log("all set");

})

// when message is send by resolve .
const mypromiise=new Promise((resolve,reject)=>{
    console.log("execute promise");
    resolve("Success");

})
mypromiise.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
})

// to show error
const mypromisee=new Promise((resolve,reject)=>{
    console.log("execute promise");
    reject("Netwotk error");

})
mypromisee.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log("Error is:",err);
}).finally(()=>{
    console.log("Finally executed")
})






