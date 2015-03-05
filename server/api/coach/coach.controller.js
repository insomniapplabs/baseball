'use strict';

var _ = require('lodash');
var Coach = require('./coach.model');

// Get list of coachs
exports.index = function(req, res) {
  Coach.find(function (err, coachs) {
    if(err) { return handleError(res, err); }
    return res.json(200, coachs);
  });
};

// Get a single coach
exports.show = function(req, res) {
  Coach.findById(req.params.id, function (err, coach) {
    if(err) { return handleError(res, err); }
    if(!coach) { return res.send(404); }
    return res.json(coach);
  });
};

// Creates a new coach in the DB.
exports.create = function(req, res) {
  Coach.create(req.body, function(err, coach) {
    if(err) { return handleError(res, err); }
    return res.json(201, coach);
  });
};

// Updates an existing coach in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Coach.findById(req.params.id, function (err, coach) {
    if (err) { return handleError(res, err); }
    if(!coach) { return res.send(404); }
    var updated = _.merge(coach, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, coach);
    });
  });
};

// Deletes a coach from the DB.
exports.destroy = function(req, res) {
  Coach.findById(req.params.id, function (err, coach) {
    if(err) { return handleError(res, err); }
    if(!coach) { return res.send(404); }
    coach.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}