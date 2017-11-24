var connection = require('./connection.js')

//function change object to form or sql:
function sequl(data){
//create array to pass in
	var array = [];

	 for(var key in data){

	 	var value = data[key];
//check whether should be '' around value
// e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
 // e.g. {sleepy: true} => ["sleepy=true"]

	 	if (typeof value === "string" && value.indexOf(" ") >=0){
	 		value = "'" + value + "'"
	 	}
	 	array.push(`${key} = ${value}`)
	 }

	 return array;

}

// //generate ? for create
// 	function

	var orm = {

//method that select all data

		all: function(table, cb){
			var queryString = `SELECT * FROM ${table}`;
			connection.query(queryString,  function (err, res){
				if(err){
					throw err;
				}
				//call back using sent data
				//console.log(res)
				cb(res)
			})
		},


	// //method that select with condition
	// 	select: function(table, condition, cb){
	// 		var queryString = `SELECT * FROM ? WHERE ?`;
	// 		connection.query(queryString,[table,condition], function(err,res){
	// 			if(err){
	// 				throw err;
	// 			}
	// 			//call back using sent data
	// 			cb(res)
	// 		})
	// 	}


	//method that update with conditon
		update: function(table, condition, value, cb){
			//console.log(value)
			var val = sequl(value);
			//console.log(val);
			var queryString = `UPDATE ${table} SET ${val} WHERE ${condition}`
			var query = connection.query(queryString, function(err,res){
				if(err){
					throw err;
				}
				//call back using sent data
				cb(res)

			} )

			console.log(query.sql)

		},


	//method that create object
		create:function(table, columns,value, cb){
			var queryString = `INSERT INTO ${table} (${columns}) VALUES (?) `
			var query = connection.query(queryString, [ value], function(err,res){
					if(err){
					throw err;
				}
				console.log(res)
				//call back using sent data
				cb(res)

			})

			console.log("this is "+ query.sql)
		}
	}

	module.exports = orm;
