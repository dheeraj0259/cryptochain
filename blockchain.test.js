const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {
  let blockchain;

  beforeEach(() => {
    blockchain = new Blockchain();
  });

  it('contains a `chain` Array instance', () => {
    expect(blockchain.chain instanceof Array).toBe(true);
  });

  it('starts with geneis block', () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis());
  });

  it('adds a new block to the chain', () => {
    const newData = 'test-data-jest';
    blockchain.addBlock({ data: newData });

    expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(newData);
  });

  describe('isValidChain()', () => {
    beforeEach(() => {
      blockchain.addBlock({ data: 'red' });
      blockchain.addBlock({ data: 'blue' });
      blockchain.addBlock({ data: 'green' });
      blockchain.addBlock({ data: 'yellow' });
    });
    describe('when the chain does not start with genesis block', () => {
      it('returns false', () => {
        blockchain.chain[0] = { data: 'fake-genisis-data' };

        expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
      });
    });

    describe('when the chain starts with genesis block and has multiple blocks', () => {
      describe('and a last hash has changed', () => {
        it('returns false', () => {
          blockchain.chain[3].lastHash = 'change-last-hash-to-break-this-test';
          expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
        });
      });

      describe('and the chain contains block with invalid field', () => {
        it('returns false', () => {
          blockchain.chain[1].data = 'this-is-fake-data-to-break-this-test';
          expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
        });
      });

      describe('and the chain does not chain any invalid blocks', () => {
        it('returns true', () => {
          expect(Blockchain.isValidChain(blockchain.chain)).toBe(true);
        });
      });
    });
  });
});
