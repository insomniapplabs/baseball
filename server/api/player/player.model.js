'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  firstName: String,
  lastName: String,
  number: String,
  teamAge: String
});

module.exports = mongoose.model('Player', PlayerSchema);
