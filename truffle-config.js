const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    janu2: {
      network_id: "*",
      gas: 0,
      gasPrice: 0,
      provider: new HDWalletProvider(fs.readFileSync('/Users/janu/anaconda3/janu/MyCode/BlockChain/blockchain.env', 'utf-8'), "https://janu3.blockchain.azure.com:3200/yKNmqXs4zMFpbqUH986W3q6n"),
      consortium_id: 1557603650965
    }
  },
  mocha: {},
  compilers: {
    solc: {}
  }
};
