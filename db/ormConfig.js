/**
 * @author Hao
 * @date 2016-08-22
 * @fileoverview orm connections
 */

module.exports = {
	Blog: {
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
	},
	Contact: {
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
	},
	Code: {
		define: function (db, models, next) {
			models.Code = db.define("code", {
				codeid: Number,
				codesource: String,
				codetarget: String
			}, {
				id: "codeid"
			});
			next();
		}
	}
};
