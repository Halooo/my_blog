/**
 * @author Hao
 * @date 2016-08-17
 * @fileoverview router for Contact page
 */

var express = require('express');
var router = express.Router();

//var mysql = require('mysql');
var orm = require('orm');
var dbConfig = require('./db/dbConfig');

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

