
/**
 * Module dependencies.
 */

var Session = require('./session');
var Events = require('./events');
var render = require('./render');

/**
 * Render index html page.
 */

exports.index = function *() {
  // var metrics = yield Events.get();
  metrics = {
    referrers: [{ referrer: 'google.com', count: 10 }, { referrer: 'facebook.com', count: 5 }],
    sessions: [{ session: 30, count: 10 }, { session: 60, count: 2 }],
    agents: [{ agent: 'chrome', count: 10 }, { agent: 'firefox', count: 2 }]
  };
  return this.body = yield render('index', metrics);
};

// {
//   referrers: [{ 'google.com': 10 }, { 'facebook.com': 5 }],
//   sessions: [{ 30: 10 }, { 60: 2 }],
//   agents: [{ 'chrome': 10 }, { 'firefox': 2 }]
// }

/**
 * API route for receiving event.
 */

exports.event = function *() {
  return yield Events.add(this.request.body);
};

/**
 * API route for receiving session.
 */

exports.session = function *() {
  return yield Session.add(this.request.body);
};
