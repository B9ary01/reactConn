var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	username: String,
	password: String
}),
user = mongoose.model('UserData', userSchema);

module.exports = user;