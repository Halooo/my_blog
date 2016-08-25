/**
 * @author Hao
 * @date 2016-08-17
 * @fileoverview router for Contact page
 */

var express = require('express');
var router = express.Router();

//var mysql = require('mysql');
var orm = require('orm');
var dbConfig = require('../db/dbConfig');

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

router.get('/getContactInfo', function(req, res, next) {
	req.models.Contact.find({
		id: 0 // param.id
	}, function (err, contact) {
		res.json(contact);
	});
});

// router.get('/getContactInfo', function(req, res, next) {
// 	orm.connect(dbConfig.opts, function (err, db) {
// 		if (err) throw err;
// 		var Contact = db.define("contact", {
// 			id: Number,
// 			github: String,
// 			email: String,
// 			wechat: String,
// 			tweet: String
// 		});
//
// 		// var param = req.query || req.params;
// 		Contact.find({
// 			id: 0 // param.id
// 		}, function (err, contact) {
// 			res.json(contact);
// 		});
// 	})
// });

module.exports = router;
