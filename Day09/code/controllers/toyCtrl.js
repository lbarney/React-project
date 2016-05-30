var mongojs = require('mongojs');
var ObjectId = require('mongodb').ObjectId;

var dbtoy = mongojs('dogs',['toyinfo'])

module.exports = {
  create: function(req, res, next) {
    dbtoy.toyinfo.insert(req.body, function(err, result){
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  },
  read: function(req, res, next) {
    dbtoy.toyinfo.find({}, function(err, result){
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  },
  update: function(req, res, next){
    var updateObj = {
      query: {_id: ObjectId(req.params.id)},
      update: {$set: req.body},
      new: false
    };
    dbtoy.toyinfo.findAndModify(updateObj, function(err, result){
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  },
  delete: function(req, res, next){
    dbtoy.toyinfo.remove({_id:ObjectId(req.params.id)}, function(err, result){
      if (err) {
        res.send(err);
      }
      res.send("Successfully deleted");
    });
  }
};
