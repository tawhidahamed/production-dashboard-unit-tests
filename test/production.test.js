
import { expect } from 'chai';
import { sum } from '../src/math/statisticsUtils.js';

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
