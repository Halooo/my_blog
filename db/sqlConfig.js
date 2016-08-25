/**
 * @author Hao
 * @date 2016-08-22
 * @fileoverview basic sql lines currently unused
 */
var UserSQL = {
	insert:'INSERT INTO users(email,name) VALUES(?,?)',
	queryAll:'SELECT * FROM users'
};

module.exports = UserSQL;
