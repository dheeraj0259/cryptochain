const Block = require('./block');
const cryptoHash = require('./crypto-hash');
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

    it('returns a block instance', () => {
      expect(genesisBlock instanceof Block).toBe(true);
    });

    it('returns the genesis data', () => {
      expect(genesisBlock).toEqual(GENESIS_DATA);
    });
  });

  describe('mineBlock()', () => {
    const lastBlock = Block.genesis();
    const data = 'some test data';
    const minedBlock = Block.mineBlock({ lastBlock, data });

    it('returns a block instance', () => {
      expect(minedBlock instanceof Block).toBe(true);
    });

    it('sets the `lastHash` to be `hash` of lastBlock', () => {
      expect(minedBlock.lastHash).toEqual(lastBlock.hash);
    });

    it('sets the data', () => {
      expect(minedBlock.data).toEqual(data);
    });

    it('sets the timestamp', () => {
      expect(minedBlock.timestamp).not.toEqual(undefined);
    });

    it('creates a SHA-256 `hash` with proper inputs', () => {
      expect(minedBlock.hash).toEqual(cryptoHash(minedBlock.timestamp, lastBlock.hash, data));
    });
  });
});
