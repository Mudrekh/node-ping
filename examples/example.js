//-------- example -----------------------

var ping = require('../index');

var hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];
hosts.forEach(function(host){
    ping(host, function(err, isAlive){
      if(err){
        console.log("Host", host, " is unreachable: ", err.message);
      } else {
        console.log("Host", host, "is reachable!");
      }
    });
});

