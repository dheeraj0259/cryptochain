const Block = require('./block');
const { GENESIS_DATA } = require('./config');

describe('Block', () => {
  it('has a timestamp, lastHash, hash, and data property', () => {
    // arrange
    const timestamp = 'test-date';
    const lastHash = 'test-hash';
    const hash = 'test-unique-hash';
    const data = ['testdata1', 'testdata2'];
    // act
    const block = new Block({
      timestamp, lastHash, hash, data,
    });
    // assert
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });

  describe('genisis()', () => {
    const genesisBlock = Block.genesis();

    it('returns a block statement', () => {
      expect(genesisBlock instanceof Block).toBe(true);
    });
    it('returns the genesis data', () => {
      expect(genesisBlock).toEqual(GENESIS_DATA);
    });
  });
});
