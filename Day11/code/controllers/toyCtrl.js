var ToyModel = require('./../models/dogToyModel');

module.exports = {
  create: function(req, res, next) {
    var toy = new ToyModel(req.body);
    toy.save(function(err, result){
      if(err) {
        res.send(err);
      }
      res.send(result);
    });
  },
  read: function(req, res, next) {
    ToyModel
    .find(req.query)
    .exec(function (err, result) {
      if(err) {
        res.send(err);
      }
      res.send(result);
    });
  },
  update: function(req, res, next){
    ToyModel
    .findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if(err) {
        res.send(err);
      }
      res.send(result);
    });
  },
  delete: function(req, res, next){
    ToyModel
    .findByIdAndRemove(req.params.id, req.body, function(err, result){
      if(err) {
        res.send(err);
      }
      res.send(result);
    });
  }
};
