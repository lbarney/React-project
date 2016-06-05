var mongoose = require('mongoose');

var dogSchema = new mongoose.Schema({
    name: {type: String, required: true},
    breed: {type: String, required: true},
    color: {type: String, required: true},
    favoriteThings: [
      {
        type: {type: String},
        name: {type: String},
        shape: {type: String},
        description: {
          name: {type: String},
          occupation: {type: String},
          phone: {type: String},
          car: {type: String},
          address: {
            localAddress: {type: String},
            City : {type: String},
            State: {type: String},
            zip: {type: String}
          },
          favoriteMusic: [
            {
              name: {type: String},
              genre: {type: String}
            }
          ]
        },
        sideEffects: {type: String}
    }],
});

module.exports = mongoose.model('Dog', dogSchema);
