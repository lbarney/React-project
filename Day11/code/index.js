
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var passport = require('passport');//local auth
var session = require('express-session');//session
//ejs
//path

var dogCtrl = require('./controllers/dogCtrl');
var userCtrl = require('./controllers/userCtrl');//user ctrl
var config = require('./config/config');//session secret

var app = express();

require('./config/passport')(passport);//self invokes passport

app.use(session(config));//set session secret
app.use(passport.initialize());//initialize passport
app.use(passport.session());//configure passport through session
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));


app.post('/auth', passport.authenticate('local-signup'), function(req, res, next){
    res.send();
});


app.get('/user/me', userCtrl.getMe);
app.get('/user/logout', userCtrl.logout);

app.post('/dogs', dogCtrl.create);
app.get('/dogs', dogCtrl.read);
app.put('/dogs/:id', dogCtrl.update);
app.delete('/dogs/:id', dogCtrl.delete);

mongoose.connect("mongodb://localhost:27017/dogs");
mongoose.connection.once('open', function(){
  console.log("Connected to mongoDB");
});

app.listen(8000, function(){
  console.log("listening to 8000");
});
