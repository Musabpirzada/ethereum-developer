const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;
const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction);
}

function mine() {
    let transactions = [];
    while (transactions.length < MAX_TRANSACTIONS && mempool.length > 0) {
        transactions.push(mempool.pop());
    }

    let nonce = 0;
    let block;
    let hash;

    while (true) {
        block = {
            id: blocks.length,
            transactions,
            nonce,
        };

        // Stringify the new block object
        const blockString = JSON.stringify(block);

        // Calculate the SHA256 hash of the stringified block as a BigInt
        const hashBigInt = BigInt(`0x${SHA256(blockString)}`);

        // Check if the hash is less than the TARGET_DIFFICULTY
        if (hashBigInt < TARGET_DIFFICULTY) {
            hash = hashBigInt.toString(16); // Convert the hash to a hexadecimal string
            break;
        }

        // Increment the nonce and try again
        nonce++;
    }

    // Add the hash to the block
    block.hash = hash;

    // Push the mined block to the blocks array
    blocks.push(block);
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction,
    mine,
    mempool,
    blocks,
};
