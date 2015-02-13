var ping = require("../index");

var hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];

hosts.forEach(function(host) {
  ping(host)
    .then(function(res) {
      console.log(res);
    });
});

hosts.forEach(function(host) {
  ping(host, {
      timeout: 10,
      extra: ["-i", "2"]
    })
    .then(function(res) {
      console.log(res);
    });
});
