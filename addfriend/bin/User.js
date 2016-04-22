var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	username: {type: String},
	pass: {type: String},
	listfriend: [{type: mongoose.Schema.Types.ObjectId, ref: 'event_detail'}]
});

var User = mongoose.model('friend', userSchema);
module.exports = User ;