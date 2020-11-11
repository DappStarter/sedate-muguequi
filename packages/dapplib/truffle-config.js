require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan repeat stereo upgrade grace merry fog genius'; 
let testAccounts = [
"0xacded47a95cec28d64311abc7f230a55d5fd84e9a59fb72be1953e19bdb0eee0",
"0x05c47b0328592a0b05f4592df995944540c49f2fcb07f5ef1b6a02adc20a5ba6",
"0xbd21aa3496656ccaa519810f39c78e065fb0afc815cb4da2cd0c3b9ed81863dd",
"0x85018a68da7ec05128d3f26be1f1bac5c2b4143ab1fb3f73f4e1c9ed5d34dd0e",
"0x3ddeca888287daf00284f963bde934f149dac71c151f2b3e7b8c251be6217468",
"0xefd0839a4c85262b2709a2f256f215049547963b07e4966dfcf849cf2b6a2ee9",
"0x21c2c1ac9a08d3e1d397ee2b70df8f48d8decec2d5b4afcfaffb58fd23105e65",
"0xa515a2b68761ed0ff5aced7f509c2b9bda742e5e443b7700c68d58132bff456c",
"0x9a5887b8f4edd7b83fc3ff14c478ffaf3c08380f47b51e01458df4a4fafcdebf",
"0x4d0679e3491e273a7f637e5ed8ff527e34b77fd0b73e2663166e78299292b980"
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
