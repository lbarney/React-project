var mongojs = require('mongojs'); //We are going create a collection that will display in RoboMongo.  We will use mongojs specific methods (i.e. .insert(data, callback), .find({},callback), .findAndModify(data that includes id Object, callback), .remove(id Object, callback))
var ObjectId = require('mongodb').ObjectId;

var db = mongojs('dogs', ['doginfo']);

module.exports = { //end point descriptions
  create: function(req, res, next) {
    db.doginfo.insert(req.body, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  read: function(req, res, next) { //display all dogs
    db.doginfo.find({}, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  update: function(req, res, next){ //manually update dogs id id matches name
    var newObj = {
      query: {_id: ObjectId(req.params.id)},
      update: {$set: req.body},
      new: false
    };
    db.doginfo.findAndModify(newObj, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  },
  delete: function(req, res, next){ //manually delete dogs if id matches name
    db.doginfo.remove({_id: ObjectId(req.params.id)}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
};
