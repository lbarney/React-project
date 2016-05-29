var express = require('express'); //makes coding node way nicer
var bodyParser = require('body-parser'); //parses objects into json format
var cors = require('cors'); //takes care of headers
var session = require('express-session'); //keeps you logged in unless you log off or close out of your browser

var config = require('./config/config'); //place to hide secret. Be sure to include in the .gitignore file
var dogCtrl = require('./controllers/dogCtrl'); //calling in controller documents
var userCtrl = require('./controllers/userCtrl');

var app = express(); //run express

app.use(cors({origin: "http://localhost:9000"})); //run cors
app.use(bodyParser.json()); //json-ifys req.body
app.use(bodyParser.urlencoded()); //This made my code work why?????
app.use(session({secret: config.secret}))//sets up session secret
app.use(express.static(__dirname + '/public')); //automatically opens public folder and runs front end index.html when nodemon runs

//end points
app.post('/login', userCtrl.login);

app.post('/dogs', dogCtrl.create);
app.get('/dogs', dogCtrl.read);
app.put('/dogs', dogCtrl.update);
app.delete('/dogs', dogCtrl.delete);


//localhost:8000
app.listen(8000, function(){
  console.log("listening to 8000");
});
