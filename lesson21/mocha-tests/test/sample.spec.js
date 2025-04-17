const assert = require('assert');

describe('Simple math test', () => {
  it('adds two numbers correctly', () => {
    const sum = 2 + 3;
    assert.strictEqual(sum, 5);
  });

  it('multiplies two numbers correctly', () => {
    const product = 4 * 5;
    assert.strictEqual(product, 20);
  });
});
