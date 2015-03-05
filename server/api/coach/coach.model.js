'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CoachSchema = new Schema({
  firstName: String,
  lastName: String,
  type: String,
  teamAge: String
});

module.exports = mongoose.model('Coach', CoachSchema);