const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require('./hashMessage');

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {
    // Step 1: Hash the message
    const messageHash = hashMessage(msg);

    // Step 2: Convert the private key to a Buffer
    const privateKeyBuffer = Buffer.from(PRIVATE_KEY, 'hex');

    // Step 3: Sign the message hash
    const signature = await secp.sign(messageHash, privateKeyBuffer, { recovered: true });

    return signature;
}

module.exports = signMessage;
