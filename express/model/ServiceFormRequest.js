var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an object that shows
//the shape of your database entries.
var serviceformrequestSchema = new Schema({
  
  fname:String,
  lname:String,
  orgname:String,
  email:String,
  phone:String,
  required:String,
  startDate:String,
  completionDate:String,
  requestDate:String,
  country:String,
  region:String,
  addlInfo:String
});

//export our module to use in server.js
module.exports = mongoose.model('ServiceFormRequest', serviceformrequestSchema);
