var dogs = require('./dogs');

module.exports = { //end point descriptions
  create: function(req, res, next) { //manually add dogs
      dogs.push(req.body);
      res.send(dogs);
  },
  read: function(req, res, next) { //display all dogs
      res.send(dogs);
  },
  update: function(req, res, next){ //manually update dogs id id matches name
    for(var i = 0; i < dogs.length; i++) {
      if (req.params.id === dogs[i].name) {
        dogs[i] = req.body;
      }
    }
    res.send(dogs);
  },
  delete: function(req, res, next){ //manually delete dogs if id matches name
    for(var i = 0; i < dogs.length; i++) {
      if (req.params.id === dogs[i].name) {
        dogs.splice(i,1);
      }
    }
    res.send(dogs);
  }
};
