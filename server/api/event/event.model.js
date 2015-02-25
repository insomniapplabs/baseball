'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
  title: String,
  description: String,
  location: String,
  start: Date,
  time: String,
  end: Date,
  allDay: Boolean,
  url: String,
  team: String,
  notes: String,
  type: String,
  className: String
});

module.exports = mongoose.model('Event', EventSchema);
