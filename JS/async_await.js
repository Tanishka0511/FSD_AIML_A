function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Register End");
            resolve();
        }, 3000)
    })

}
function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        
            console.log("Email send");
            resolve();

        }, 1000)
    })


}
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login")
            resolve();

        }, 2000)
    })




}
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("got user data")
            resolve();

        }, 4000)
    })




}
function displayData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return reject("Netork error in displayData")
            console.log("user data display")
            // resolve();
            

        }, 1000)
    })

}
async function authenticate(){
    try{
    await register();
    await  sendEmail();
    await  login();
    await  getData();
    await  displayData();
    }
    catch(err){
        console.log("error",err);

    }

}
authenticate();
console.log("hello");