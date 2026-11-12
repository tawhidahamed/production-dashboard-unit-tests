
import { expect } from 'chai';
import { sum, min } from '../src/math/statisticsUtils.js';

describe('Production Dashboard - sum()', function () {

  it('should calculate total production correctly', function () {
    expect(sum([100, 200, 300])).to.equal(600);
  });

  it('should handle a single production value', function () {
    expect(sum([150])).to.equal(150);
  });

  it('should handle zero production', function () {
    expect(sum([0, 0, 0])).to.equal(0);
  });

  it('should handle decimal production values', function () {
    expect(sum([10.5, 20.5])).to.equal(31);
  });

  it('should return zero for an empty array', function () {
    expect(sum([])).to.equal(0);
  });

});

describe('Production Dashboard - min()', function () {

  it('should find the lowest production value', function () {
    expect(min([100, 200, 300])).to.equal(100);
  });

  it('should handle a single production value', function () {
    expect(min([150])).to.equal(150);
  });

  it('should handle negative values', function () {
    expect(min([-10, 20, 30])).to.equal(-10);
  });

  it('should handle decimal values', function () {
    expect(min([10.5, 5.2, 20.8])).to.equal(5.2);
  });

  it('should return Infinity for an empty array', function () {
    expect(min([])).to.equal(Infinity);
  });

});
