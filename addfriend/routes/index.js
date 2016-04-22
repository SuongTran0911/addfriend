var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


var User = require('../bin/User');




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/insertData', function(req, res) {
  var User1 = new User({username: "ABC", pass:"VVV"});
  var User2 = new User({username: "ABCD", pass:"VVV"});
  
  var User3 = new User({username: "ABCE", pass:"VVV"});
  
  var User4 = new User({username: "ABCF", pass:"VVV"});
  
  var User5 = new User({username: "ABCG", pass:"VVV"});



  var userlist = mongoose.model('friend');
  userlist.find({}, {pass: 0, _id: 0, __v: 0}).exec(function(err, data){
  	if(err){
  		res.send("Errors");
  	}
  	else
  	{
  		res.json(data);
 
  		console.log("Success");
  		res.render('friend', {data: list});
  	}
  })

});



router.get('/post', function(req, res) {
	var userlist = mongoose.model('friend');
  userlist.find({}, {pass: 0, __v: 0}).exec(function(err, data){
  	if(err){
  		res.send("Errors");
  	}
  	else
  	{
  		//res.json(data);
      console.log(data._id);
  		console.log("Success");
  		res.render('friend', {data: data});
  	}
  })

});

router.get('/post/:id', function(req, res){
  var userID = req.params.id;




})


module.exports = router;


