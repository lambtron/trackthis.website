
/**
 * Module dependencies.
 */

var db = require('./db');
var wrap = require('co-monk');
var Metrics = require('./metrics');

/**
 * Construct `Referrer`.
 */

var Referrer = Metrics('referrer');

/**
 * Expose `Referrers`.
 */

module.exports = Referrer;

/**
 * Add `referrer`.
 */

Referrer.add = function *(e) {
  return yield this.increment(e.context.page.referrer);
};
