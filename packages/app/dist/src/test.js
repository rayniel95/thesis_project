"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fabric_network_1 = require("fabric-network");
const fs_1 = tslib_1.__importDefault(require("fs"));
const js_yaml_1 = tslib_1.__importDefault(require("js-yaml"));
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const wallet = new fabric_network_1.FileSystemWallet('./identity/user/user1/wallet');
const certificate = fs_1.default.readFileSync('/home/lsw/hyperledger-fabric-network/artifacts/crypto-config/peerOrganizations/org1.hurley.lab/users/User1@org1.hurley.lab/msp/signcerts/User1@org1.hurley.lab-cert.pem');
const keyStore = fs_1.default.readFileSync('/home/lsw/hyperledger-fabric-network/artifacts/crypto-config/peerOrganizations/org1.hurley.lab/users/User1@org1.hurley.lab/msp/keystore/55f900606daa84e618ce579fa89132a417ab5cf2e4983b7f5e8f3e4ce671bcf5_sk');
const networkProfile = fs_1.default.readFileSync('/home/lsw/hyperledger-fabric-network/network-profiles/org1.network-profile (copia).yaml', 'utf-8');
const connectionProfile = js_yaml_1.default.safeLoad(networkProfile);
const connOptions = {
    identity: 'user1', wallet: wallet,
    discovery: { enabled: false, asLocalhost: true },
};
const gateway = new fabric_network_1.Gateway();
function run() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        console.log(bcrypt_1.default.hashSync('contrasenasecreta', 10));
    });
}
run();
//# sourceMappingURL=test.js.map