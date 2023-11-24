const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  level: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  resourceId: {
    type: String,
    required: true
  },
  timestamp: {
    type: String,
    required: true
  },
  timestamp1: {
    type: Date,
    required: true
  },
  traceId: {
    type: String,
    required: true 
  },
  spanId: {
    type: String,
    required: true
  },
  commit: {
    type: String
  },
  metadata: {
    parentResourceId: {
    type: String,
    required: true
  },
  },
});

const Log = mongoose.model('Log', logSchema);

module.exports = Log;
