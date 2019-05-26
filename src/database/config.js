const dbName = 'inventory_management'
const port = '5432'
const postgresURI = `postgres://postgres:MyNewPassword@localhost:${port}/${dbName}`
const dbConfig = {
  conStr: postgresURI,
  port,
}
module.exports = dbConfig
