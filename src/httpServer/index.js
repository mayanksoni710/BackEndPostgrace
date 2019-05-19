import { createServer } from 'http'
import { port } from './config'

export default (app) => {
  const server = createServer(app)
  server.listen(port, () => {
    console.log('Inventory Management Server Started on port: ', port) // eslint-disable-line
  })
}
