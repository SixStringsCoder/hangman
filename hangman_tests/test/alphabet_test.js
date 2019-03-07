var expect = require('chai').expect;
const jsdom = require('jsdom-global')();

describe('buildAlphabet', () => {
  var buildAlphabet = require('../../script').buildAlphabet;
  jsdom();
  it('should accept an array as an argument', () => {
    const arr = ["A", "E", "I", "O", "U"];
    expect(buildAlphabet(arr)).to.be.true
  })
});
