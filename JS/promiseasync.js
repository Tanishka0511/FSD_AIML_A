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
            // return reject()   //by this even "email send"  not executed
            console.log("Email send");
            resolve();
            // reject()   //after reject no other function execute

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
            console.log("user data display")
            resolve();

        }, 1000)
    })

}


// instead of callback hell ,we can use promises
register().then(sendEmail).then(login).then(getData).then(displayData).catch(() => { console.log("error") })
console.log("hello");