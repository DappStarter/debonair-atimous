require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remain company harvest hidden tail treat'; 
let testAccounts = [
"0x8c58295f41e19254b1dbf719868b69d150950cd30708b657bdf462f36e0809d9",
"0xb3f241215bfd2de27448a52b35042916ad2bcbef187a00481b3643f92cd1521d",
"0x61d94ac837662082bcdd2b1ecc0212c62b46336596b4ee0d3de596f525a8c5bb",
"0x6815cd5ae816cb56fce8407a0b1992ec0555679d67c79ae19c69e7d76a885106",
"0x704c2298592d8c4c64c27319bfd3653d5980e4ecbcfb34714bfa8d95f2a9897e",
"0x784b02c3ec8283601b2d7adb80dc6b4097392ecc23ec6f8b00c5217764c8e45c",
"0xf086245ad487067ce31b6e7e01939416334ea12c00de9ae493f90a5429562ef2",
"0x86c3def4bae6e2d7cbe5f4186a2c289689450ba022dc410dc9e6c5fdf85ef7d8",
"0x30987125b71d578f7e8bd8247d71bd2aad2160f01603fc8936c8493a97fdb295",
"0x785aab772cd7d8eb61df35a913df55654eb61b455d01eeaf9184df777663fc88"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
