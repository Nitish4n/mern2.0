const express= require('express');

const app = express();
const bodyparser = require('body-parser');
console.log('working');

app.use(bodyparser.json());


app.listen(3000, ()=>{
	console.log('server 3000');
});


app.get('/', (req, res)=>{
	res.send("<h1>Working</h1>");
});

app.post('/postdata', (req, res)=>{
	var email = req.body.email;
	var amount = req.body.amount;

	if(amount <= 1){
		info = {};
		info.error = true;
		info.message = "Amount is very less";

		return res.send(info);
	}

	res.send({'email :' : email, 'amount : ' : amount});
});