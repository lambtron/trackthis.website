
/**
 * Module dependencies.
 */

var db = require('./db');
var wrap = require('co-monk');
var Events = wrap(db.get('events'));
var Referrer = require('./referrer');
var Session = require('./session');
var Agent = require('./agent');
var View = require('./view');
var IP = require('./ip');

/**
 * Expose `Events`.
 */

module.exports = Events;

/**
 * Add event.
 */

Events.add = function *(e) {
  yield Referrer.add(e);
  yield Agent.add(e);
  yield View.add(e);
  yield IP.add(e);
  return yield this.insert(e);
};

/**
 * Retrieve `metrics`.
 */

Events.get = function *() {
  var metrics = {};
  metrics.referrers = yield Referrer.db.find({});
  metrics.sessions = yield Session.db.find({});
  metrics.agents = yield Agent.db.find({});
  metrics.ips = yield IP.db.find({});
  metrics.views = yield View.db.find({});
  return metrics;
};
