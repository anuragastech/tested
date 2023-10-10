
// var z =  document.createElement("div");
// z.innerHTML= "hello how r u";
// z.style.color="red";
// z.style.width="200px";
// z.style.height="200px"
// z.style.backgroundColor="green";
// document.body.appendChild(z);


// function addincome() {

//     var cat=document.sample.catogary.values;
//     var income= document.sample.incomes.values;


// var d =  document.createElement("table");
// d.style.height="300px";
// d.style.width="400px";
// d.style.border="2px solid black"

// var e=document.createElement("tr");


// var f=document.createElement("th");
// f.innerHTML=cat;
// var g=document.getElementById("text0");
// f.appendChild(g);


// var w=document.createElement("th");
// w.innerHTML=income
// var v=document.getElementById("");
// w.appendChild(v);



// f.style.border="2px solid black"

// document.body.appendChild(d);
// d.appendChild(e);
// e.appendChild(f);
// e.appendChild(w);

// }


// function addincome() {
//     var cat = document.sample.catogary.value; 
//     var income = document.sample.incomes.value;  
//     var d = document.createElement("table");
//     d.style.height = "300px";
//     d.style.width = "400px";
//     d.style.border = "2px solid black";

//     var e = document.createElement("tr");

//     var f = document.createElement("th");
//     f.innerHTML = ""+ "<br>";  
//     var g = document.createElement("td");
//     g.innerHTML = cat;  
//     f.appendChild(g);

//     var w = document.createElement("th");
//     w.innerHTML = "Income" + "<br>";  
//     var v = document.createElement("td"); 
//     v.innerHTML = income;  
//     w.appendChild(v);

//     f.style.border = "2px solid black";

//     document.body.appendChild(d);
//     d.appendChild(e);
//     e.appendChild(f);
//     e.appendChild(w);
// }

// console.log("hai");

// const http = require("http");

// const s=http.create((request,Response)=>{
// res.write("hello where r u ")
// res.end();

// });

// const http = require("http");

// const server = http.createServer((request, response) => {
//     response.write("hello where r u ");
//     console.log(request.url);
//         response.end();
// });

// server.listen(3000, () => {
//     console.log("Server is listening on port 3000");
// });


const http = require("http");
const fs = http.request("fs");

const path = require("path");


const server = http.createServer((request, response) => {
    fs.readfile(path.join(__dirname, "views", "index.html"), "utf8", (err, data) => {
      
        if (err)throw err;
          response.writeHead(200, { "content-type": "text/html" });

    response.end(data);

    })
  
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});









// *****

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((request, response) => {
    if (request.url === "/") {
        fs.readFile(path.join(__dirname, "index.html"), "utf8", (err, data) => {
            if (err) {
                response.writeHead(500, { "content-type": "text/plain" });
                response.end("Internal Server Error");
                console.error(err);
            } else {
                response.writeHead(200, { "content-type": "text/html" });
                response.end(data);
            }
        });
    } else {
        response.writeHead(200, { "content-type": "text/plain"});
        response.end("<h1dgydwdghwy<h1");
    }
});


server.listen(3003,() => {
    console.log("Server is listening on port 3003");
});

