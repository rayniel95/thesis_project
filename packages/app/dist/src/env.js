"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionOptions = exports.wallet = exports.connectionProfile = exports.user1PrivKeyAbsPath = exports.user1CertAbsPath = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const yaml = tslib_1.__importStar(require("js-yaml"));
const fabric_network_1 = require("fabric-network");
const networkProfileAbsPath = '/home/lsw/hyperledger-fabric-network/network-profiles/org1.network-profile (copia).yaml';
const walletRelPath = './identity/user/user1/wallet';
exports.user1CertAbsPath = '/home/lsw/hyperledger-fabric-network/artifacts/crypto-config/peerOrganizations/org1.hurley.lab/users/User1@org1.hurley.lab/msp/signcerts/User1@org1.hurley.lab-cert.pem';
exports.user1PrivKeyAbsPath = '/home/lsw/hyperledger-fabric-network/artifacts/crypto-config/peerOrganizations/org1.hurley.lab/users/User1@org1.hurley.lab/msp/keystore/55f900606daa84e618ce579fa89132a417ab5cf2e4983b7f5e8f3e4ce671bcf5_sk';
const networkProfile = fs_1.default.readFileSync(networkProfileAbsPath, 'utf-8');
exports.connectionProfile = yaml.safeLoad(networkProfile);
exports.wallet = new fabric_network_1.FileSystemWallet(walletRelPath);
exports.connectionOptions = {
    identity: 'user1', wallet: exports.wallet,
    discovery: { enabled: false, asLocalHost: true }
};
//# sourceMappingURL=env.js.map