/**
 * @author Hao
 * @date 2016-08-17
 * @fileoverview
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var debug = require('debug')('mysqldemo:server');
var http = require('http');
var ejs = require('ejs');
var lactate = require('lactate');
var orm = require('orm');

var routes = require('./routes/index');
var blog = require('./routes/blog');
var contact = require('./routes/contact');

var app = express();
var router = express.Router();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
var staticdir = path.join(__dirname, 'dist');
console.log(staticdir);
app.use(express.static(staticdir));

//
// var ormConfig = require('../db/ormConfig.js');
var dbConfig = require('./db/dbConfig');
app.use(orm.express(dbConfig.opts, {
	define: function (db, models, next) {
		models.Blog = db.define("blog", {
			blogid: Number,
			blogtype: String,
			blogcontent: String,
			blogtitle: String,
			blogdesc: String,
			date: Number
		}, {
			id: "blogid"
		});
		next();
	}
}));

app.use(orm.express(dbConfig.opts, {
	define: function (db, models, next) {
		models.Contact = db.define("contact", {
			id: Number,
			github: String,
			email: String,
			wechat: String,
			tweet: String
		});
		next();
	}
}));
//

app.use('/', routes);
app.use('/blog', blog);
// app.use('/blog/detail', blog);
app.use('/contact', contact);

// app.use(lactate.static(__dirname + '/static'));

app.use(function(req, res, next) {
	var err = new Error('Not Found');
	console.log(err,res);
	err.status = 404;
	next(err);
});

// production error handler
// no stacktraces leaked to user
var port = normalizePort(process.env.PORT || '8988');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
	var port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

/**
 * Event listener for HTTP server "listening" event.
 */
app.use(function() {
	var args = arguments;
	var isErr = args[0] instanceof Error;
	if (isErr) {
		args[2].status(500).send(args[0]);
	} else {
		args[2]();
	}
});

function onListening() {
	var addr = server.address();
	var bind = typeof addr === 'string'
		? 'pipe ' + addr
		: 'port ' + addr.port;
	debug('Listening on ' + bind);
}
