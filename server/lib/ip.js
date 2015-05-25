
/**
 * Module dependencies.
 */

var db = require('./db');
var wrap = require('co-monk');
var Metrics = require('./metrics');

/**
 * Construct `IP`.
 */

var IP = Metrics('ip');

/**
 * Expose `Referrers`.
 */

module.exports = IP;

/**
 * Add `IP`.
 */

IP.add = function *(e) {
  return yield this.increment(e.context.ip);
};
