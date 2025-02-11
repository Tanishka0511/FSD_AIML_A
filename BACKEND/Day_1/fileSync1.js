const fs=require("node:fs");
function myReadFile(){try{
    const data=fs.readFileSync("dummy.txt")
    // const data=fs.readFileSync("dummy.txt","utf-8")
if(data){
    console.log("file data:",data.toString());
    // console.log("file data:",data);
}
    else{
        throw err;
    }

}
catch(err){
    console.log("file error:",err.message);
}
}

function myWriteFile(data){
    try{
    // const data="This is writeFileSync";
    fs.writeFileSync("dummy.txt",data);
    }
    catch(err){
        console.log("file writing error",err.message)
    }
}

// myReadFile();
// myWriteFile();
// myReadFile();
module.exports={myReadFile:myReadFile,myWriteFile:myWriteFile,username:"khushi"}