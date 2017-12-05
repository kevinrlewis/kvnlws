// load the things we need
var mongoose = require('mongoose');

// define the schema for our blog post model
var postSchema = mongoose.Schema({

  subject : String,
  content : String,
  date    : Number

});

// create the model for blog post and expose it to our app
module.exports = mongoose.model('blogpost', postSchema);
