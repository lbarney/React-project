var DogModel = require('./../models/dogModel'); //Call in model. Use as constructor function to create new objects

module.exports = {
  create: function(req, res, next) {
    var dog = new DogModel(req.body); //Create new object using model using inputted data
    dog.save(function(err, result){ //.save will add to mongo
      if(err) {  //error handling
        res.send(err);
      }
      res.send(result); //return results
    });
  },
  read: function(req, res, next) {
    DogModel
    .find(req.query) //find all dogs
    .exec(function (err, result) {
      if(err) {
        res.send(err);
      }
      console.log(result);
      res.send(result);
    });
  },
  update: function(req, res, next){
    DogModel
    .findByIdAndUpdate(req.params.id, req.body, function(err, result){ //finds by id and changes data based on inputted data
      if(err) {
        res.send(err);
      }
      res.send(result);
    });
  },
  delete: function(req, res, next){
    DogModel
    .findByIdAndRemove(req.params.id, req.body, function(err, result){ //finds by id and deletes data
      if(err) {
        res.send(err);
      }
      res.send(result);
    });
  }
};
