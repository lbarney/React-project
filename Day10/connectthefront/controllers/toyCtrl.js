var ToyModel = require('./../models/ToyModel.js');

//mongoose methods - obj.save(callback), Model.find().exec(callback), Model.findByIdAndUpdate(id, data, callback), Model.findByIdAndRemove(id, data, callback)

module.exports = { //end point descriptions
  create: function(req, res, next) {
    var toy = new ToyModel(req.body);
    toy.save(function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  read: function(req, res, next) { //display all toys
    ToyModel
    .find()
    .exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  update: function(req, res, next){ //manually update toys id id matches name
    ToyModel
    .findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  delete: function(req, res, next){ //manually delete toys if id matches name
    ToyModel
    .findByIdAndRemove(req.params.id, req.body, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
};
