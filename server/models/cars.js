var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Car = new Schema({
  make:String,
  model:String,
  year:Number,
  color:String
});

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/cars');

module.exports = mongoose.model('cars', Car);
