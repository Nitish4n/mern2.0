const express= require('express');

const app = express();
const bodyparser = require('body-parser');

const {save_user_information} = require('./models/server_db.js');
console.log('working');


app.use(bodyparser.json());


app.listen(3000, ()=>{
	console.log('server 3000');
});


app.get('/', (req, res)=>{
	res.send("<h1>Working</h1>");
});

app.post('/postdata', async (req, res)=>{
	var email = req.body.email;
	var amount = req.body.amount;
	console.log('save_user_information. 1');

	if(amount <= 1){
		info = {};
		info.error = true;
		info.message = "Amount is very less";

		return res.send(info);
	}

	console.log(2222);
	try{
		console.log(3333);
		var result = await save_user_information({"email" : email, "amount" : amount});
	} catch(error){
		console.error(error);
	}
	console.log('last');
	
	// return result;
	res.send({'email :' : email, 'amount : ' : amount});
});



app.get('/getTotalAmount', async (req, res)=>{
	
	try{
		var result = await getTotalAmount();
	} catch(error){
		console.error(error);
	}
	console.log('last');
	
	// return result;
	res.send(result);
});