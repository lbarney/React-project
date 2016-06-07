var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var passport = require('passport');//local auth
var session = require('express-session');//session

var dogCtrl = require('./controllers/dogCtrl');
var userCtrl = require('./controllers/userCtrl');//user ctrl so we can get current user and logout
var config = require('./config/config');//session secret

var app = express();

require('./config/passport')(passport);//self invokes passport

app.use(session(config));//set session secret
app.use(passport.initialize());//initialize passport
app.use(passport.session());//configure session through passport. Starts session on login
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.post('/auth', passport.authenticate('local-signup'), userCtrl.login);//post login includes passport authenticate

app.get('/user/me', userCtrl.getMe);//**gets current user after login if you want to display user info on view
app.get('/user/logout', userCtrl.logout);//**logs out user and ends session

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
