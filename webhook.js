"use strict";

console.log("Running webapp...");

let Express = require('express');
let app = new Express();
app.use(require('body-parser').urlencoded());
app.use(require('body-parser').json());
app.get('/',(req,res)=>{
	console.log("User connecting to app");
	res.status(200).send("Hello Node.js");
})
.post('/webhook',(req,res)=>{
	console.log("Webhook activated");
	console.log(req.body);
	res.status(200).send();
})
.listen(process.env.PORT || 80,()=>{
	console.log("Running webhook listener...");
}) ;
	