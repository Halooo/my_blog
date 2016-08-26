/**
 * @author Hao
 * @date 2016-08-26
 * @fileoverview router for code page
 */
var express = require('express');
var router = express.Router();

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

router.get('/codeList', function(req, res, next) {
	req.models.Code.find({
	}, function (err, code) {
		res.json(code);
	});
});

module.exports = router;
