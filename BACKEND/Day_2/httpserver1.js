const http=require("http");
const fs=require("fs/promises")
const server=http.createServer(async(req,res)=>{
    const url=req.url;
    if(url=="/home" && req.method=="GET"){
        // res.write("<h1 style=color:Green>Home Page</h1>");
        const data=await fs.readFile("home.html","utf-8");
        res.write(data);
    }
    // else if(url=="/about" && req.method=='POST'){
        else if(url=="/about" && req.method=='GET'){
        // res.write("<h1>About page</h1>");
        const data=await fs.readFile("about.html","utf-8");
        res.write(data);
    }
    else{
        res.write("<h1>Error page</h1>")
    }
    res.end();


})
server.listen(3000,(err)=>{
    try{
        if(err){
            throw err;
        }
        console.log("server is running on port 3000");

    }
    catch(err){
        console.log("server error");

    }
})