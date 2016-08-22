/**
 * @author Hao
 * @date 2016-08-22
 * @fileoverview
 */
var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbConfig = require('./db/dbConfig');
var sqlConfig = require('./db/sqlConfig');
var pool = mysql.createPool( dbConfig.mysql );
// pool.query('INSERT INTO users(email,name) VALUES(1,2)', function(err, result) {
// 	console.log(result,err);
// })
var responseJSON = function (res, ret) {
	if(typeof ret === 'undefined') {
		res.json({
			code:'-200',
			msg: 'request failed'
		});
	} else {
		res.json(ret);
	}
};

router.get('/addUser', function(req, res, next){
	pool.getConnection(function(err, connection) {
		var param = req.query || req.params;
		connection.query(sqlConfig.insert, [param.email, param.name], function(err, result) {
			if(result) {
				result = {
					code: 200,
					msg:'success'
				};
			}
			responseJSON(res, result);
			connection.release();

		});
	});
});

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

module.exports = router;
