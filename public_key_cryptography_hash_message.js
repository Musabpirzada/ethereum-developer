const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
    // Convert the message to UTF-8 bytes
    const messageBytes = utf8ToBytes(message);

    // Calculate the keccak256 hash of the UTF-8 bytes
    const hash = keccak256(messageBytes);

    return hash;
}

module.exports = hashMessage;
