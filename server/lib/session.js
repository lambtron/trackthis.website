
/**
 * Module dependencies.
 */

var db = require('./db');
var wrap = require('co-monk');
var Metrics = require('./metrics');

/**
 * Construct `Session`.
 */

var Session = Metrics('session');

/**
 * Expose `Session`.
 */

module.exports = Session;

/**
 * Add `Session`.
 */

Session.add = function *(e) {
  return yield this.increment(e.seconds);
};
