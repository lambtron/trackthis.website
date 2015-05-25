
/**
 * Module dependencies.
 */

var db = require('./db');
var wrap = require('co-monk');
var Metrics = require('./metrics');

/**
 * Construct `Agent`.
 */

var Agent = Metrics('userAgent');

/**
 * Expose `Agent`.
 */

module.exports = Agent;

/**
 * Add `Agent`.
 */

Agent.add = function *(e) {
  return yield this.increment(e.context.userAgent);
};
