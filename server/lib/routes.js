
/**
 * Module dependencies.
 */

var render = require('./render');

/**
 * Render index html page.
 */

exports.index = function *() {
  return this.body = yield render('index');
};

/**
 * API route for receiving ping.
 */

exports.ping = function *() {
  var user = this.request.body;
  console.log(user);
  return this.body = 200;
};
