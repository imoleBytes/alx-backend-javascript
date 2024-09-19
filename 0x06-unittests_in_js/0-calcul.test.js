const calculateNumber = require('./0-calcul.js');
const assert = require("assert");
const { it, describe } = require("mocha");
// const calculateNumber = require("./0-calcul");

describe("calculateNumber()", function() {

    it(`check if result is correct`, function() {
      const res = calculateNumber(1, 2);
      assert.strictEqual(res, 3);
    });
    it(`check for 0 values as arguments`, function() {
      const res = calculateNumber(0, 0);
      assert.strictEqual(res, 0);
    });
    it(`check for negative floats`, function() {
      const res = calculateNumber(-1.6, -1.7);
      assert.strictEqual(res, -4);
    });
    it(`check for negative results`, function() {
      const res = calculateNumber(-1.4, -1.3);
	    assert.strictEqual(res, -2);
    });
    it(`check if results is round`, function() {
      const res = calculateNumber(1.4, 2.2);
      assert.strictEqual(res, 3);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(1.6, 2.7);
      assert.strictEqual(res, 5);
    });
});
