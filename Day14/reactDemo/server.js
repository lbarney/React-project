var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/views'));

var animalControl = require('./controllers/animalControl.js');

app.post('/animals', animalControl.create);
app.get('/animals', animalControl.read);
app.put('/animals/:id', animalControl.update);
app.delete('/animals/:id', animalControl.delete);
app.get('/animals/:id', animalControl.readById);


if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));
} else {
  // When not in production, enable hot reloading

  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));

  // Do "hot-reloading" of express stuff on the server
  // Throw away cached modules and re-require next time
  // Ensure there's no important state in there!
  var watcher = chokidar.watch('./server.js');//would change this if different server file name
  watcher.on('ready', function() {
    watcher.on('all', function() {
      console.log('Clearing /server/ module cache from server');
      Object.keys(require.cache).forEach(function(id) {
        if (/\/server\//.test(id)) delete require.cache[id];
      });
    });
  });
}





mongoose.connect("mongodb://localhost:27017/react_practice");
mongoose.connection.once('open', function(){
	console.log("Connected to your database.");
});



app.get('/', function(req, res){  // says lets render whats in our index file
	res.render('index');
});



app.listen(8000, function(){
	console.log("The magic happens on port 8000");
});
