const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// The possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// Given a hash, return the color that created the hash
function findColor(hash) {
    for (const color of COLORS) {
        const colorBytes = utf8ToBytes(color);
        const colorHash = sha256(colorBytes);
        if (toHex(colorHash) === toHex(hash)) {
            return color;
        }
    }
    return null; // Color not found in the array
}

module.exports = findColor;
