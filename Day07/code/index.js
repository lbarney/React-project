var express = require('express'); //makes coding node way nicer
var bodyParser = require('body-parser'); //parses objects into json format
var cors = require('cors'); //takes care of headers

var dogs = require('./dogs'); //list of data for reserve

var app = express(); //run express

app.use(cors()); //run cors
app.use(bodyParser.json()); //json-ifys req.body
app.use(bodyParser.urlencoded()); //This takes in any code that is url encoded and translates it to appropriate json format
app.use(express.static(__dirname + '/public')); //automatically opens public folder and runs front end index.html when nodemon runs

//end points

app.post('/dogs', function(req, res, next) { //manually add dogs
  dogs.push(req.body); //set headers needed without cors
  // res.status(200).set({
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
  //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  //   'X-XSS-Protection': '1; mode=block',
  //   'X-Frame-Options': 'SAMEORIGIN',
  //   'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  // })
  res.send(dogs);
});
app.get('/dogs', function(req, res, next) { //display all dogs
  //set headers needed without cors
  // res.status(200).set({
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
  //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  //   'X-XSS-Protection': '1; mode=block',
  //   'X-Frame-Options': 'SAMEORIGIN',
  //   'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  // })
  res.send(dogs);
});
app.put('/dogs/:id', function(req, res, next){ //manually update dogs
  for(var i = 0; i < dogs.length; i++) {
    if (req.params.id === dogs[i].name) {
      dogs[i] = req.body;
    }
  }//set headers needed without cors
  // res.status(200).set({
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
  //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  //   'X-XSS-Protection': '1; mode=block',
  //   'X-Frame-Options': 'SAMEORIGIN',
  //   'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  // })
  res.send(dogs);
});
app.delete('/dogs/:id', function(req, res, next){ //manually delete dogs
  for(var i = 0; i < dogs.length; i++) {
    if (req.params.id === dogs[i].name) {
      dogs.splice(i,1);
    }
  }//set headers needed without cors
  // res.status(200).set({
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
  //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  //   'X-XSS-Protection': '1; mode=block',
  //   'X-Frame-Options': 'SAMEORIGIN',
  //   'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  // })
  res.send(dogs);
});
//options and set headers needed without cors
// app.options('/', function(req, res, next){
//   res.status(200).set({
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
//     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
//   }).send(JSON.stringify(messages));
// });

//localhost:8000
app.listen(8000, function(){ //set up listener
  console.log("listening to 8000"); //log so you know it is working
});
