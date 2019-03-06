var expect = require('chai').expect;

// Test Suite
describe('Mocha', () => {
  // Test spec - it() groups similar expectations together,
  // representing a single unit test
  it('should run our tests using NPM', () => {
    // chai expectation for the test
    expect(true).to.be.ok;
  });
})
