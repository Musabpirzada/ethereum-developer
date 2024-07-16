const Block = require('./Block');

class Blockchain {
    constructor() {
        const genesisblock = new Block("Genesis Block");
        this.chain = [genesisblock];
    }
}

module.exports = Blockchain;