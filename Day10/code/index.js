var express = require('express'); //makes coding node really easy
var bodyParser = require('body-parser'); //decodes json into JS objects
var cors = require('cors'); //completes headers for you
var mongoose = require('mongoose'); //makes mongo easy and incorporates schemas/models

var dogCtrl = require('./controllers/dogCtrl'); //calling in controller documents
var toyCtrl = require('./controllers/toyCtrl');

var app = express();

app.use(cors());
app.use(bodyParser.json()); //json-ifys req.body
app.use(bodyParser.urlencoded()); //This made my code work why?????
app.use(express.static(__dirname + '/public')); //automatically opens public folder andruns front end index.html when nodemon runs

//end points
app.post('/dogs', dogCtrl.create);
app.get('/dogs', dogCtrl.read);
app.put('/dogs/:id', dogCtrl.update);
app.delete('/dogs/:id', dogCtrl.delete);

app.post('/toys', toyCtrl.create);
app.get('/toys', toyCtrl.read);
app.put('/toys/:id', toyCtrl.update);
app.delete('/toys/:id', toyCtrl.delete);

mongoose.connect("mongodb://localhost:27017/dogsntoys"); //connects to Mongo local 27017
mongoose.connection.once('open', function(){
  console.log("Connected to mongoDB");
});

//localhost:8000
app.listen(8000, function(){
  console.log("listening to 8000");
});
