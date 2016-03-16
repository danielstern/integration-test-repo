"use strict";

console.log("Running webapp...");

let Express = require('express');
let app = new Express();
app.get('/',(req,res)=>{
	console.log("User connecting to app");
	res.status(200).send("Hello world");
})
.post('/webhook',(req,res)=>{
	console.log("Webhook activated");
})
.listen(process.env.PORT || 80,()=>{
	console.log("Running webhook listener...");
}) ;
