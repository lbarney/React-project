var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var dogCtrl = require('./controllers/dogCtrl');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));


app.post('/dogs', dogCtrl.create);
app.get('/dogs', dogCtrl.read);
app.put('/dogs/:id', dogCtrl.update);
app.delete('/dogs/:id', dogCtrl.delete);

app.listen(8000, function(){
  console.log("listening to 8000");
});
