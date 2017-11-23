var orm = require('../config/orm.js')

var burger = {

	all: function(cb){
		orm.all("burgers", cb)
	},

	// select: function(condition, cb){
	// 	orm.select("burgers", condition, cb)
	// }

	update: function(condition, value, cb){
		orm.update("burgers", condition, value, cb)
	},

	create: function(columns, value, cb){
		orm.create("burgers", columns, value, cb)
	}

}

module.exports = burger
