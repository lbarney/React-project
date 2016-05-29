var express = require('express'); //makes coding node way nicer
var bodyParser = require('body-parser'); //parses objects into json format
var cors = require('cors'); //takes care of headers

var dogCtrl = require('./controllers/dogCtrl'); //calling in controller documents
var toyCtrl = require('./controllers/toyCtrl');

var app = express(); //run express

app.use(cors()); //run cors
app.use(bodyParser.json()); //json-ifys req.body
app.use(bodyParser.urlencoded()); //This takes in any code that is url encoded and translates it to appropriate json format
app.use(express.static(__dirname + '/public')); //automatically opens public folder and runs front end index.html when nodemon runs

//end points
app.post('/dogs', dogCtrl.create);
app.get('/dogs', dogCtrl.read);
app.put('/dogs/:id', dogCtrl.update);
app.delete('/dogs/:id', dogCtrl.delete);

app.post('/toys', toyCtrl.create);
app.get('/toys', toyCtrl.read);
app.put('/toys/:id', toyCtrl.update);
app.delete('/toys/:id', toyCtrl.delete);

//localhost:8000
app.listen(8000, function(){
  console.log("listening to 8000");
});
