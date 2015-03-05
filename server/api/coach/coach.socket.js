/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Coach = require('./coach.model');

exports.register = function(socket) {
  Coach.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Coach.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('coach:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('coach:remove', doc);
}