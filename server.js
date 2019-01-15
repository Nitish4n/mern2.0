const express= require('express');

const app = express();
console.log('working');


app.listen(3000, ()=>{
	console.log('server 3000');
});


app.get('/', (req, res)=>{
	res.send("<h1>Working</h1>");
});

app.post('/postdata', (req, res)=>{
	var email = req.body.email;
	var amount = req.body.amount;

	res.send({'email :' : email, 'amount : ' : amount});
});