/**
 * @author Hao
 * @date 2016-08-17
 * @fileoverview
 */
var express = require("express");
var app = express();
var router = express.Router();

app.get('/contact', function(req, res) {
	res.send({
		contactInfo: {
			email: "haosun0226#gmail.com",
			github: "https://github.com/Halooo",
			wechat: "haosun0226",
			tweet: "@haosun0226"
		}
	});
});

app.listen(8988);
