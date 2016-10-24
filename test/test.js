"use strict";

const assert = require("chai").assert;
const codecheck = require("codecheck");
const app = codecheck.consoleApp(process.env.APP_COMMAND);

describe("Echo", function() {
  let cases = require("./cases.json");
  cases.forEach(v => {
    let desc = v.it || `${v.input.join(", ")} ->-> ${v.output.join(", ")}`;
    it(desc, () => {
      return app.codecheck(v.input).then(result => {
        assert.equal(result.code, 0);
        assert.deepEqual(result.stdout, v.output);
      });
    });
  });
});

