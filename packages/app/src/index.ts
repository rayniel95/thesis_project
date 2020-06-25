import AdminBro from 'admin-bro'
import * as AdminBroExpress from 'admin-bro-expressjs'
import express from 'express'
import {Database, Resource} from 'admin-bro-sequelizejs'
import ExpressFormidable from 'express-formidable'
import * as models from './models/models'


AdminBro.registerAdapter({Database, Resource})


const app = express()
app.use(ExpressFormidable())


// Routes definitions
app.get('/', (req, res) => res.send('Hello World!'))

// Route which returns last 100 users from the database
app.get('/users', async (req, res) => {
  const users = await models.HealthProffesional.findAll({limit: 10})
  res.send(users)
})

// Route which creates new user
app.post('/users', async (req, res) => {
    const user = await models.HealthProffesional.create({
        name: 'ffefef',
        speciality: 'dd'})

    res.send(user)
})


const adminBro = new AdminBro({
    databases: [models],
    rootPath: '/admin',
  })
  

const router = AdminBroExpress.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)

// Running the server() {
async function run() {
    // await models.sync()
    app.listen(8080, () => console.log(`Example app listening on port 8080!`))
}

run()