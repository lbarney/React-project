var mongoose = require('mongoose'); //call in mongoose for schema constructor and referencing
var dogToyModel = require('./dogToyModel'); //call in the toy model to reference
var Owner = require('./ownerSchema'); //call in owner to embed schema

var dogSchema = new mongoose.Schema({ //setup schema object description with key values
    name: {type: String, required: true}, //in each key, layout the key requirements. see mongoose for all others
    breed: {type: String, required: true},
    color: {type: String, required: true},
    toys: [{type:mongoose.Schema.Types.ObjectId, ref: "DogToy" }], //reference dogtoy model by ID. Don't forget to populate in end point function
    owner: Owner //Embed owner schema
});

module.exports = mongoose.model('Dog', dogSchema); //export as model
