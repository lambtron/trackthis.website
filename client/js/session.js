'use strict';

(function() {

  var seconds = 0;
  start();

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
    seconds += 30;
    $.post('/api/session', { seconds: seconds }, function(err, res) {
      console.log(res);
    });
  }

})();