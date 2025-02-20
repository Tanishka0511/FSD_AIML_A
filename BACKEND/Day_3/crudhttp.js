const http = require("http");
const port = 3003;
const data = [{
    id: 1001,
    name: "khushi solanki",
    email: "abc@gmail.com"

}];
const server = http.createServer((req, res) => {
   
    const url = req.url;
    if (url == "/users" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(data));

        // thunderClient ->new request --> 
        //#http://localhost:3003/users
        //or
        // #http://172.16.43.212:3003/users
    }
    else if (url == "/users" && req.method == "POST") {
        let body=''
        req.on("data",(chunk)=>{
            body+=chunk;
        })
        req.on("end",()=>{
            const parseData=JSON.parse(body);
            const{name,email}=parseData;
            const newId = data.length>0?(data[data.length -1].id+1):1001;
            const newUser={
                // id:newId,
                // name:name,
                // email:email
                id:newId,name,email
            };
            data.push(newUser);
        })
        
        res.writeHead(201, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ status: "success", message: "new user created successfully" }));

 //http://localhost:3003/users
 //{
//   "name":"tanishka solanki",
//   "email":"abc24@gmail.com"
// }
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ status: "fail", message: "page not found" }));
    }
    res.end()




})

server.listen(port, (err) => {
    try {
        if (err) {
            throw err;
        }
        console.log(`server is runnning on port ${port}`);

    }
    catch (err) {
        console.log("server error:", err.message);
    }
})




//  c ->crearte (post)   (create user)
//  r->read(get)          (/users ,/user/:id) :id->reuest params
//  u-<update (put/patch)   (/edituser/user/:id)
//  d->delete(delete)        (/delete/user/:id))

//NOTE : SERVER IS STATELESS

//JSON.parse(data)-->  when frontend to backend
//JSON.stringfy(data)--> when backend to frontend





// npm init
//npm i express