

// Timeout is used to make function asynchronous
// wuh waitforthreesecond function all tasks perform synchronously
function register(cb){
    // waitforthreesecond();
    setTimeout(()=>{
        console.log("Register End");
        cb();
    },3000)
}
function sendEmail(cb){
    
    // waitforthreesecond();
    setTimeout(()=>{
        console.log("Email send");
        cb();
    },1000)
}
function login(cb){
    console.log("login")
    cb();
    // waitforthreesecond();
}
function getData(cb){
    console.log("got user data")
    cb();
    // waitforthreesecond();
}
function displayData(){
    console.log("display user data");
    // waitforthreesecond();
}
// function waitforthreesecond(){
//     const ms=3000+new Date().getTime();
//     while(ms>new Date());
// }


// register();
// sendEmail();
// login();
// getData();
// displayData();

// this syntax is used to fix register function as all function execute after this function ..but afet that we not fix any function so they execute as previous

// register(function(){
//     sendEmail();
//     login();
//     getData();
//     displayData();

// });


// callback hell -->perform task synchronously   
// callback hell can be solved by promise
register(function(){
    sendEmail(function(){
        login(function(){
            getData(function(){
                displayData();
            })
        })
    })
})
