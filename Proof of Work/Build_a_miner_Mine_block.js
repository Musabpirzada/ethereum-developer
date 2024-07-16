const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    if (mempool.length < MAX_TRANSACTIONS) {
        // You can add some validation logic here if needed
        mempool.push(transaction);
    } else {
        console.log("Mempool is full. Transaction not added.");
    }
}

function mine() {
    // Get the block height prior to mining (current length of blocks array)
    const blockHeight = blocks.length;

    // Create a new block with the unique identifier (id)
    const newBlock = {
        id: blockHeight
    };

    // Push the new block to the blocks array
    blocks.push(newBlock);

    // Optionally, you can clear the mempool after mining
    mempool.length = 0;
}


module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};
