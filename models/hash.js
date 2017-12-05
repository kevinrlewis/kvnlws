// load the things we need
var mongoose = require('mongoose');

// define the schema for our hash model
var hashSchema = mongoose.Schema({

  hash : String

});

// create the model for hash and expose it to our app
module.exports = mongoose.model('hash', hashSchema);
