import {AdminModel} from '../../health_adapter/dist/src/adminModel'
import {connectionProfile, connectionOptions} from './env'
import bcrypt from 'bcrypt'


async function addAdmin() {
    let admin = new AdminModel(connectionProfile, connectionOptions)
    admin.createAdmin(123, "Rainyel", "rainyel@rainyel.com", bcrypt.hashSync("cosa", 10))
    console.log("finished")
}

addAdmin()
