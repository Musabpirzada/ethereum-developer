const Block = require('./Block');

class Blockchain {
    constructor() {
        const genesisblock = new Block("Genesis Block");
        this.chain = [genesisblock];
    }
    addBlock(newBlock){
        this.chain.push(newBlock);
    }
}

module.exports = Blockchain;