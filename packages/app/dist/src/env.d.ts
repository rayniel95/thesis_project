import { FileSystemWallet } from 'fabric-network';
export declare const user1CertAbsPath = "/home/lsw/hyperledger-fabric-network/artifacts/crypto-config/peerOrganizations/org1.hurley.lab/users/User1@org1.hurley.lab/msp/signcerts/User1@org1.hurley.lab-cert.pem";
export declare const user1PrivKeyAbsPath = "/home/lsw/hyperledger-fabric-network/artifacts/crypto-config/peerOrganizations/org1.hurley.lab/users/User1@org1.hurley.lab/msp/keystore/55f900606daa84e618ce579fa89132a417ab5cf2e4983b7f5e8f3e4ce671bcf5_sk";
export declare const connectionProfile: any;
export declare const wallet: FileSystemWallet;
export declare const connectionOptions: {
    identity: string;
    wallet: FileSystemWallet;
    discovery: {
        enabled: boolean;
        asLocalHost: boolean;
    };
};
