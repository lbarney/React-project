var mongoose = require('mongoose');

var ownerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    human: {type: Boolean, required: true},
    job: {type: String, required: true},
    givesTreats: {type: Boolean, required: true}
});

module.exports = ('Owner', ownerSchema); //since this is not a model, export as schema. This is the schema that is embedded into the dog model
