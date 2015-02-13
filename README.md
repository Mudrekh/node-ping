#NODE-PING
a ping wrapper for nodejs

#LICENSE MIT

(C) Daniel Zelisko, Mudrekh Goderya

http://github.com/Mudrekh/node-ping

#DESCRIPTION

node-ping is a simple wrapper for the system ping utility

#INSTALLATION

npm install ping

#USAGE

##Tradition calls

    var ping = require('ping');

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

##Promise wrapper

    var ping = require('ping');

    var hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];

    hosts.forEach(function(host) {
      ping(host)
        .then(function(res) {
          console.log(res);
        });
    });

##Promise Wrapper with configable ping options

    //Only promise wrapper supports configable ping options
    hosts.forEach(function(host) {
      ping(host, {
          timeout: 10,
          extra: ["-i", "2"]
        })
        .then(function(res) {
          console.log(res);
        });
    });

