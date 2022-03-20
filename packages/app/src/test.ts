import {FileSystemWallet, Gateway, X509WalletMixin, GatewayOptions, DefaultEventHandlerStrategies} from 'fabric-network'
import fs from 'fs'
import yaml from 'js-yaml'
import { Certificate } from 'crypto'
import bcrypt from 'bcrypt'

const wallet = new FileSystemWallet(
    './identity/user/user1/wallet')

const certificate = fs.readFileSync('/home/lsw/hyperledger-fabric-network/artifacts/crypto-config/peerOrganizations/org1.hurley.lab/users/User1@org1.hurley.lab/msp/signcerts/User1@org1.hurley.lab-cert.pem')
const keyStore = fs.readFileSync('/home/lsw/hyperledger-fabric-network/artifacts/crypto-config/peerOrganizations/org1.hurley.lab/users/User1@org1.hurley.lab/msp/keystore/55f900606daa84e618ce579fa89132a417ab5cf2e4983b7f5e8f3e4ce671bcf5_sk')
const networkProfile = fs.readFileSync('/home/lsw/hyperledger-fabric-network/network-profiles/org1.network-profile (copia).yaml', 'utf-8')
const connectionProfile = yaml.safeLoad(networkProfile)


// const identity = X509WalletMixin.createIdentity('org1MSP', 
//     certificate.toString(), keyStore.toString())

// wallet.import('user1', identity)
const connOptions: GatewayOptions = {
        identity: 'user1', wallet: wallet, 
        discovery: {enabled: false, asLocalhost: true},
    }

const gateway = new Gateway()

async function run() {
    console.log(bcrypt.hashSync('contrasenasecreta', 10))
}

run()