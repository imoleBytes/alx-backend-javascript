const expect = require("chai").expect;
const { it, describe } = require("mocha");
const calculateNumber = require("./2-calcul_chai");

describe('calculateNumber', () => {
  describe("SUM", function() {
    it(`checking SUM for positive numbers`, function() {
      const res = calculateNumber("SUM", 1, 2);
      expect(res).to.equal(3);
    });
    it(`checking SUM for positive numbers`, function() {
      const res = calculateNumber("SUM", 1, 52);
      expect(res).to.equal(53);
    });
  });
  describe('SUBTRACT', () => {
    it(`checking for floats`, function() {
      const res = calculateNumber("SUBTRACT", 1.4, 2.2);
      expect(res).to.equal(-1);
    });
    it(`checking subrtarct floats`, function() {
      const res = calculateNumber("SUBTRACT", 4.9, 2.7);
      expect(res).to.equal(2);
    });
  })
  describe('DIVIDE', () => {
    it(`checking for dividing positive integers`, function() {
      const res = calculateNumber("DIVIDE", 4, 2);
      expect(res).to.equal(2);
    });
    it(`checking for 0 denominator`, function() {
      const res = calculateNumber("DIVIDE", 1.7, 0);
      expect(res).to.equal("Error");
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber("DIVIDE", 1.4, 4.6);
      expect(res).to.equal(0.2);
    });
  });
});
