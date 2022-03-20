import {app} from './server'


// Running the server() {
  async function run() {
    app.listen(8080, () => console.log(`app listening on port 8080!`))
}

run()