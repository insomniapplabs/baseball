'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UpdateSchema = new Schema({
  title: String,
  date: Date,
  team: String,
  author: String,
  text: String,
  draft: {type: Boolean, default: true}
});

module.exports = mongoose.model('Update', UpdateSchema);