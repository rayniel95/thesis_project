"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const env_1 = require("./env");
const fabric_network_1 = require("fabric-network");
const certificate = fs_1.default.readFileSync(env_1.user1CertAbsPath);
const keyStore = fs_1.default.readFileSync(env_1.user1PrivKeyAbsPath);
const identity = fabric_network_1.X509WalletMixin.createIdentity('org1MSP', certificate.toString(), keyStore.toString());
env_1.wallet.import('user1', identity);
//# sourceMappingURL=addToWallet.js.map