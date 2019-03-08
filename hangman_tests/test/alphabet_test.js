var expect = require('chai').expect;
const jsdom = require('jsdom-global')();

describe('buildAlphabet', () => {
  const buildAlphabet = require('../../script').buildAlphabet;
  jsdom();
  it('should accept an array as an argument', () => {
    arr = ["A", "E"];
    expect(buildAlphabet(arr)).to.be.an('array');
  })
});

describe('secretWord', () => {
  const secretWord = require('../../script').secretWord;
  jsdom();
  it('should accept a string as an argument', () => {
    expect(secretWord("today")).to.be.a('string');
  })
})
