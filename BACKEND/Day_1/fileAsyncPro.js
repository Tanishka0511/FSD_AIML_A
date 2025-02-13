// const fs = require('fs/promises');
// function myReadFile() {
//     try {
//         const data = fs.readFile("dummy.txt", "utf-8");
//         data.then((d) => {
//             console.log("file data:", d);
//         }).catch((err) => {
//             throw err;
//         }
//         )

//     }
//     catch (err) {
//         console.log("file reading error:", err.message);
//     }
// }



// const myWriteFile=(data)=>{
// try{
// const res=fs.writeFile("dummy.txt",data);
// res.then(()=>{
//     console.log("writing successfully");
// }).catch((err)=>{
//     throw err;
// })
// }
// catch (err) {
//     console.log("file writing error:", err.message);
// }

// }


// myReadFile();
// myWriteFile("new data uploaded");
// myReadFile();



//ASYNC AWAIT



const fs = require('fs/promises');
async function myReadFile() {
    try {
        const data = await fs.readFile("dummy.txt", "utf-8");
        console.log("file data:",data);   

    }
    catch (err) {
        console.log("file reading error:", err.message);
    }
}



const myWriteFile=async(data)=>{
try{
const res=await fs.writeFile("dummy.txt",data);
    console.log("writing successfully");

}
catch (err) {
    console.log("file writing error:", err.message);
}

}


myReadFile();
myWriteFile("new data uploaded");
myReadFile();