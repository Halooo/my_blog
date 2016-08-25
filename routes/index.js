/**
 * @author Hao
 * @date 2016-08-17
 * @fileoverview
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	//res.render('index', { title: 'Index' });
	res.render('../dist/index.html');
});

module.exports = router;
