var db = require('../db.js');


save_user_information = (data) => new Promise((resolve, reject) =>{
	console.log(data);
	db.query('INSERT INTO lottery SET ?' , data, function(err, results, fields){
		if(err){
			reject('Couldnot insert lotter data');;
		}
		resolve(results);
	});
	
})

//SELECT sum(`amount`) as `total_amount` FROM `lottery` 



getTotalAmount = (data) => new Promise((resolve, reject) =>{
	console.log(data);
	db.query('SELECT sum(`amount`) as `total_amount` FROM `lottery` ' , null, function(err, results, fields){
		if(err){
			reject('Couldnot not find total data');;
		}
		resolve(results);
	});
	
})

module.exports ={
	save_user_information,
	getTotalAmount
};