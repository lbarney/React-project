var mongojs = require('mongojs'); //call in mongojs to connect to mongo database
var ObjectId = require('mongodb').ObjectId; //why is this necessary...something to do with id for put and deletes

var dbdog = mongojs('dogs', ['doginfo']); //setup mongo structure

module.exports = { //end point descriptions
  create: function(req, res, next) {
    dbdog.doginfo.insert(req.body, function(err, result){ //call into database in the doginfo collection and insert new data
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  },
  read: function(req, res, next) {
    dbdog.doginfo.find({}, function(err, result){ //call into database in the doginfo collection and retrieve all data
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  },
  update: function(req, res, next){
    var updateObj = { //setup object for modification
      query: {_id: ObjectId(req.params.id)},
      update: {$set: req.body},
      new: false
    };
    dbdog.doginfo.findAndModify(updateObj, function(err, result){ //call into database in the doginfo collection and based on id and new data change existing data
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  },
  delete: function(req, res, next){
    dbdog.doginfo.remove({_id:ObjectId(req.params.id)}, function(err, result){ //call into database in the doginfo collection and based on id, remove selected data
      if (err) {
        res.send(err);
      }
      res.send("Successfully deleted");
    });
  }
};
