"use strict";

var assert = require("chai").assert;
var codecheck = require("codecheck");

describe("Echo", function() {
  var app = codecheck.consoleApp(process.env.APP_COMMAND);

  it("hoge -> hoge", function() {
    return app.run("hoge").spread(function(code, stdOut) {
      assert.equal(code, 0);
      assert.equal(stdOut.length, 1);
      assert.equal(stdOut[0], "hoge");
    });
  });

  it("hoge, fuga -> hoge, fuga", function() {
    var app = codecheck.consoleApp(process.env.APP_COMMAND);
    return app.run("hoge", "fuga").spread(function(code, stdOut) {
      assert.equal(code, 0);
      assert.equal(stdOut.length, 2);
      assert.equal(stdOut[0], "hoge");
      assert.equal(stdOut[1], "fuga");
    });
  });

  it("hoge fuga -> hoge fuga", function() {
    var app = codecheck.consoleApp(process.env.APP_COMMAND);
    return app.run("hoge fuga").spread(function(code, stdOut) {
      assert.equal(code, 0);
      assert.equal(stdOut.length, 1);
      assert.equal(stdOut[0], "hoge fuga");
    });
  });

});
