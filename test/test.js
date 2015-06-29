var ping = require("../lib/ping-promise");

var test = require("unit.js");

describe("ping", function() {

  var hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];

  describe("with callbacks", function() {

    hosts.forEach(function(host) {
      it('should ping ' + host, function(done) {
        ping(host, function(err, isAlive) {
          done();
        });
      });
    });

    hosts.forEach(function(host) {
      it('should ping ' + host + ' with options', function(done) {
        ping(host, {
          timeout: 10,
          extra: ["-i", "2"]
        }, function(err, isAlive) {
          done();
        });
      });
    });

  });

  describe("with promises", function(done) {

    hosts.forEach(function(host) {
      it('should ping ' + host + ' with options', function(done) {
        ping(host).finally(function() {
          done();
        });;
      });
    });

    hosts.forEach(function(host) {
      it('should ping ' + host, function(done) {
        ping(host, {
          timeout: 10,
          extra: ["-i", "2"]
        }).finally(function() {
          done();
        });;
      });
    });

  })

})
