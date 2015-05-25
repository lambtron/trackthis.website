
/**
 * Module dependencies.
 */

var db = require('./db');
var wrap = require('co-monk');
var Metrics = require('./metrics');

/**
 * Construct `View`.
 */

var View = Metrics('view');

/**
 * Expose `View`.
 */

module.exports = View;

/**
 * Add `View`.
 */

View.add = function *(e) {
  return this.db.insert({ timestamp: e.sentAt });
};
