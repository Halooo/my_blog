/**
 * @author Hao
 * @date 2016-08-22
 * @fileoverview orm connections
 */

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
