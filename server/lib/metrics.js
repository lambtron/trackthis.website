
/**
 * Module dependencies.
 */

var db = require('./db');
var wrap = require('co-monk');
var Metrics = wrap(db.get('metrics'));

/**
 * Expose `Metrics`.
 */

module.exports = Metrics;

// TODO: figure out the interface of this
//
// live stats
// - referrer breakdown
// - average time spent on site (or histogram)
// - useragent breakdown
// - ip address breakdown?
// - total hits
// - total unique hits
// - hits over time?