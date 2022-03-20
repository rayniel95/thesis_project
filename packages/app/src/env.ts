import fs from 'fs'
import * as yaml from 'js-yaml'
import {FileSystemWallet} from 'fabric-network'


const networkProfileAbsPath = '/home/lsw/hyperledger-fabric-network/network-profiles/org1.network-profile (copia).yaml'
const walletRelPath = './identity/user/user1/wallet'
export const user1CertAbsPath = '/home/lsw/hyperledger-fabric-network/artifacts/crypto-config/peerOrganizations/org1.hurley.lab/users/User1@org1.hurley.lab/msp/signcerts/User1@org1.hurley.lab-cert.pem'
export const user1PrivKeyAbsPath = '/home/lsw/hyperledger-fabric-network/artifacts/crypto-config/peerOrganizations/org1.hurley.lab/users/User1@org1.hurley.lab/msp/keystore/55f900606daa84e618ce579fa89132a417ab5cf2e4983b7f5e8f3e4ce671bcf5_sk'

const networkProfile = fs.readFileSync(networkProfileAbsPath, 'utf-8')

export const connectionProfile = yaml.safeLoad(networkProfile)
export const wallet = new FileSystemWallet(walletRelPath)
export const connectionOptions = {
    identity: 'user1', wallet: wallet, 
    discovery: {enabled: false, asLocalHost: true}
}