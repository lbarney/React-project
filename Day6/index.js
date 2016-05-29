var express = require('express'); //makes coding really easy
var bodyParser = require('body-parser'); //decodes json into JS objects
var cors = require('cors'); //headers
var mongoose = require('mongoose');


var dogCtrl = require('./controllers/dogCtrl');



var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public')); //automatically runs front end index.html when nodemon runs

mongoose.connect("mongodb://localhost:27017/dogs");
mongoose.connection.once('open', function(){
  console.log("Connected to mongoDB");
});


app.post('/dogs', dogCtrl.create);
app.get('/dogs', dogCtrl.read);
app.put('/dogs/:id', dogCtrl.update);
app.delete('/dogs/:id', dogCtrl.delete);


app.listen(9000, function(){
  console.log("listening to 9000");
});
