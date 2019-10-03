const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Returns whole string if number is null', () => {
      expect(wrap("hello erin", 0)).to.equal("hello erin");
  });
  it('Line break is not at index greater than', () => {
      expect(wrap("hello world", 5)).to.equal("hello\nworld");
  })
//   if('Line break is in between a word', () => {
//       expect(wrap())
//   })
})
