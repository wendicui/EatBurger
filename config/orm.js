var connection = require('connection.js')

var orm = {

//method that select all data

	all: function(table, cb){
		var queryString = `SELECT * FROM ?`;
		connection.query(queryString,[table], function (err, res){
			if(err){
				throw err;
			}
			//call back using sent data
			cb(res)
		})
	}


//method that select with condition
	select: function(table, condition, cb){
		var queryString = `SELECT * FROM ? WHERE ?`;
		connection.query(queryString,[table,condition], function(err,res){
			if(err){
				throw err;
			}
			//call back using sent data
			cb(res)
		})
	}


//method that update with conditon
	update: function(table, condition, value, cb){
		
	}
}