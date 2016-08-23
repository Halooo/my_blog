/**
 * @author Hao
 * @date 2016-08-22
 * @fileoverview
 */
var express = require('express');
var router = express.Router();

//var mysql = require('mysql');
var orm = require('orm');
var dbConfig = require('./db/dbConfig');
// used to use 'mysql', but now unused
// var sqlConfig = require('./db/sqlConfig');
// var pool = mysql.createPool( dbConfig.mysql );
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

router.get('/getBlog', function(req, res, next) {
	var _this = this;
	orm.connect(dbConfig.opts, function (err, db) {
		if (err) throw err;
		var Blog = db.define("blog", {
			blogid: Number,
			blogtype: String,
			blogcontent: String
		});

		var param = req.query || req.params;
		Blog.find({
			blogid: param.blogid
		}, function (err, blog) {
			res(blog.blogcontent);
		});
	})
});

router.post('/postBlog', function(req, res, next){
	orm.connect(dbConfig.opts, function (err, db) {
		if (err) throw err;
		//define a table object
		var Blog = db.define("blog", {
			blogid: Number,
			blogtype: String,
			blogcontent: String
		});
		//insert data
		//var param = req.query || req.params;
		var param = req.body;
		console.log(param);

		// ****following need to be changed based on "name" property on frontend page
		Blog.create([{
			blogid: param.id,
			blogtype: param.type,
			blogcontent: param.content
		}],function(err, result) {
			if(result) {
				result = {
					code: 200,
					msg:'success'
				};
			}
			responseJSON(res, result);
		});
	});
});

router.delete('/delBlog', function(req, res, next) {
	orm.connect(opts, function (err, db) {
		if (err) throw err;
		//define a table object
		var Blog = db.define("blog", {
			blogid: Number,
			blogtype: String,
			blogcontent: String
		});
		console.log(Blog);
		// delete data
		var param = req.query || req.params;
		Blog[0].remove(function(err){
			console.log("delete successfully!")
		})
	});
});

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

module.exports = router;
