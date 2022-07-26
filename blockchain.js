const Block = require('./block');
const cryptoHash = require('./crypto-hash');

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  /*
    @func addBlock function is to add a block to the blockchain
  */
  addBlock({ data }) {
    const newBlock = Block.mineBlock({
      lastBlock: this.chain[this.chain.length - 1],
      data,
    });

    this.chain.push(newBlock);
  }

  /*
    @func isValidChain function is to perform validation for the blockchain
*/
  static isValidChain(chain) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;
    // eslint-disable-next-line no-restricted-syntax
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < chain.length; i++) {
      const block = chain[i];
      const hash = cryptoHash(block.timestamp, block.lastHash, block.data);
      if (hash !== block.hash) return false;
    }

    return true;
  }
}

module.exports = Blockchain;
