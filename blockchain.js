const Block = require('./block');

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
}

module.exports = Blockchain;
