import fs from 'fs'
import {user1CertAbsPath, user1PrivKeyAbsPath, wallet} from './env'
import {X509WalletMixin} from 'fabric-network'

// ! wallet directory should be cleaned first
const certificate = fs.readFileSync(user1CertAbsPath)
const keyStore = fs.readFileSync(user1PrivKeyAbsPath)

const identity = X509WalletMixin.createIdentity('org1MSP', 
    certificate.toString(), keyStore.toString())

wallet.import('user1', identity)