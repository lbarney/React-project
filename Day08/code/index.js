var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session'); //keeps you logged in unless you log off or close out of your browser - Use MTCS CodeLab as an example

var config = require('./config/config'); //place to hide secret. Be sure to include in the .gitignore file
var dogCtrl = require('./controllers/dogCtrl'); //calling in controller documents
var userCtrl = require('./controllers/userCtrl');//

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({secret: config.secret}));//sets up session secret
app.use(express.static(__dirname + '/public'));

app.post('/login', userCtrl.login);//user login end point

app.post('/dogs', dogCtrl.create);
app.get('/dogs', dogCtrl.read);
app.put('/dogs/:id', dogCtrl.update);
app.delete('/dogs/:id', dogCtrl.delete);

app.listen(8000, function(){
  console.log("listening to 8000");
});
