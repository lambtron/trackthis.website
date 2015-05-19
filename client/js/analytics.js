
// document.referrer
// send ping to server every 30 seconds
// send useragent to server
// send ip address to server
// generate cookie and save it?
//


(function() {

  /**
   * Variables.
   */

  var user = {
    referrer: document.referrer,
    ip: ''
  };

  /**
   * Get the IP address.
   */

  getIp();

  /**
   * Get IP address
   */

  function getIp() {
    request('GET', 'http://api.ipify.org', function(err, res) {
      if (err) return;
      user.ip = res;
      start();
    });
  }

  /**
   * Will ping every 30 seconds.
   */

  function start() {
    setInterval(ping, 3000);
  }

  /**
   * Ping server.
   */

  function ping() {
    request('POST', '/api/ping', user, function(err, res) {
      console.log(res);
    });
  }

  /**
   * Helper ajax function
   *
   * @param {String} action
   * @param {String} url
   * @param {Object} data (opt)
   * @param {Function} fn
   */

  function request(action, url, data, fn) {
    if (typeof data === 'function') fn = data;
    var req = new XMLHttpRequest();
    req.open(action, url, true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.onload = function() {
      if (req.status >= 200 && req.status < 400)
        fn(null, req.responseText);
      else
        fn('error', null);
    };
    req.onerror = function() {
      fn('error', null);
    };
    req.send(parser(data));
  };

  /**
   * Helper parser function.
   */

  function parser(obj) {
    var arr = [];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) arr.push(prop + '=' + obj[prop]);
    }
    return arr.join('&');
  }

})();