
/**
 * Module dependencies.
 */

var db = require('./db');
var wrap = require('co-monk');

/**
 * Instantiate new Metrics object.
 */

function Metrics(name) {
  if (!(this instanceof Metrics)) return new Metrics(name);
  this.db = wrap(db.get(name));
  this.name = name;

  /**
   * Increment.
   */

  this.increment = function *(key) {
    var query = {};
    query[this.name] = key; // referrals: google.com
    var res = yield this.db.findOne(query);
    if (!res) {
      query.count = 1;
      return yield this.db.insert(query);
    }
    res.count++;
    return yield this.db.update(res);
  };
}

/**
 * Expose `Metrics`.
 */

module.exports = Metrics;
