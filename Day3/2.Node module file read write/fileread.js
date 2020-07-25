var fs = require('fs');
var data = fs.readFileSync("db1.json");
console.log("Printing file content With JSON.parse:");
console.log(JSON.parse(data));
console.log("Read File with readFile");
fs.readFile("db1.json", (err, data)=>{
    if (err) throw err;
	data = JSON.parse(data);
	console.log("Data from readFile");
	console.log(data);
    
    });
console.log("\n **** = = = = After readFile method = = = = **** \n") ;
console.log("read with require: ");
console.log("Globally accessible, loaded only once");
data = require("./db1.json");
console.log(data);

// without indentation
data_target = JSON.stringify(data);
fs.writeFileSync("db2.json", data_target);

// with indentation
data_target2 = JSON.stringify(data, null, 2);
fs.writeFileSync("db3.json", data_target2);

//without synchronization
fs.writeFile("db4.json", data_target2, (err)=>{
	if (err) throw err;
	console.log("Data is written");
    });



