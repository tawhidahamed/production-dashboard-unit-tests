
import { expect } from 'chai';

import {
  sum,
  min,
  max,
  average
} from '../src/math/statisticsUtils.js';

/**
 * Unit tests for the Production Monitoring Dashboard.
 *
 * Library: AT00CK37-3004
 * Framework: Mocha and Chai
 *
 * Tests verify production totals, minimum values,
 * maximum values, and average production.
 */

// FUNCTION 1: SUM

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
    expect(sum([10.5, 20.2, 30.3])).to.be.closeTo(61, 0.000001);
  });

  it('should return zero for an empty array', function () {
    expect(sum([])).to.equal(0);
  });

});

// FUNCTION 2: MIN

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

// FUNCTION 3: MAX

describe('Production Dashboard - max()', function () {

  it('should find the highest production value', function () {
    expect(max([100, 200, 300])).to.equal(300);
  });

  it('should handle a single production value', function () {
    expect(max([150])).to.equal(150);
  });

  it('should handle negative production values', function () {
    expect(max([-10, -20, -30])).to.equal(-10);
  });

  it('should handle decimal production values', function () {
    expect(max([10.5, 20.8, 15.2])).to.equal(20.8);
  });

  it('should return negative Infinity for an empty array', function () {
    expect(max([])).to.equal(-Infinity);
  });

  it('should handle repeated maximum values', function () {
    expect(max([200, 300, 300, 100])).to.equal(300);
  });

});

// FUNCTION 4: AVERAGE

describe('Production Dashboard - average()', function () {

  it('should calculate average production correctly', function () {
    expect(average([100, 200, 300])).to.equal(200);
  });

  it('should handle a single production value', function () {
    expect(average([150])).to.equal(150);
  });

  it('should handle zero production values', function () {
    expect(average([0, 0, 0])).to.equal(0);
  });

  it('should calculate decimal averages correctly', function () {
    expect(average([10, 20, 25])).to.be.closeTo(18.333333, 0.000001);
  });

  it('should handle negative production values', function () {
    expect(average([-10, 20, 30])).to.be.closeTo(13.333333, 0.000001);
  });

  it('should return zero for an empty production dataset', function () {
    expect(average([])).to.equal(0);
  });

});
