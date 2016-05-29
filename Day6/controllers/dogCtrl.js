var dogModel = require('./../models/dogModel');

module.exports = {
  create: function(req, res, next) {
    console.log(req.body);
    var dog = new dogModel(req.body);
    dog.save(function(err, result){
      if (err) {
        res.end();
      }
      res.send(result);
    });
  },
  read: function(req, res, next) {
    dogModel
    .find(req.query)
    .exec(function (err, result) {
      res.send(result);
    });
  },
  update: function(req, res, next){
    dogModel
    .findByIdAndUpdate(req.params.id, req.body, function(err, result){
      res.send(result);
    });
  },
  delete: function(req, res, next){
    dogModel
    .findByIdAndRemove(req.params.id, req.body, function(err, result){
      res.send(result);
    });
  }
};
