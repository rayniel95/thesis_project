import AdminBro from 'admin-bro'
import * as AdminBroExpress from 'admin-bro-expressjs'
import express from 'express'
import {Database, Resource} from 'admin-bro-sequelizejs'
import ExpressFormidable from 'express-formidable'
import * as models from '../dist/src/sequelize/models'


AdminBro.registerAdapter({Database, Resource})
//! i maybe go to another database
//! error can be solved chainging of db, changing orm, but wichs error
const app = express()
app.use(ExpressFormidable())


// Routes definitions
app.get('/', (req, res) => res.send('Hello World!'))


const adminBro = new AdminBro({
    databases: [models],
    rootPath: '/admin',
  })
  

const router = AdminBroExpress.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)

// Running the server() {
async function run() {
    app.listen(8080, () => console.log(`Example app listening on port 8080!`))
}

run()