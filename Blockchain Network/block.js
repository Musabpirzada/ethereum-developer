const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(data, previousHash = ''){
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.toHash();
    }
    toHash() {
        return SHA256(this.data + this.previousHash).toString();
    }
}

module.exports = Block;
