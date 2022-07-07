const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {
  it('generated SHA-256 output', () => {
    expect(cryptoHash('test'))
      .toEqual('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08');
  });

  it('produces the same hash with same input arguments in any order', () => {
    expect(cryptoHash('test1', 'test2', 'test3'))
      .toEqual(cryptoHash('test2', 'test3', 'test1'));
  });
});
