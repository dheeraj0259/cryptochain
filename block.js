const { GENESIS_DATA } = require('./config');

class Block {
  constructor({
    timestamp, lastHash, hash, data,
  }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  static genesis() {
    // here this refers to the current Block class
    // so, the below inturn looks like new Block(GENESIS_DATA)
    return new this(GENESIS_DATA);
  }
}

module.exports = Block;
