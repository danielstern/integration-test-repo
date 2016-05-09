"use strict";

module.exports = (app)=>{
	app.post('/webhook',(req,res)=>{
		console.log("Webhook activated");
		console.log(req.body);
		res.status(200).send();
	});
};

