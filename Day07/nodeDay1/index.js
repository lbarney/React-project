var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var dogs = [{
  name: "Fido",
  breed: "Doberman"
},
{
  name: "Toby",
  breed: "Beagle"
},
{
  name: "Max",
  breed: "Bulldog"
}];

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

// app.get('/url', function(req,res,next){next();}, function(req,res,next){})

app.get('/dogs', function(req, res, next){
  res.send(dogs);
})

app.post('/dogs', function(req,res,next){
  dogs.push(req.body);
  res.send(dogs);
})
app.put('/dogs/:id', function (req, res, next) {
  for (var i = 0; i < dogs.length; i++) {
    if (req.params.id === dogs[i].name) {
      dogs[i] = req.body;
    }
  }
  res.send(dogs);
});
app.delete('/dogs/:id', function(req, res, next){
  var found = false;
  for (var i = 0; i < dogs.length; i++) {
    if (req.params.id === dogs[i].name) {
      dogs.splice(i, 1);
      found = true;
    }
  }
  if (found == true) {
    res.send(dogs);
  } else {
    res.send("Id not found. Object not deleted.")
  }
})

app.listen(8080, function(){
  console.log("dogs are barking on 8080")
});
