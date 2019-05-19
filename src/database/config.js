const dbName = 'inventory_management'
const mongoURI = `mongodb+srv://micky007:micky007@inventorymanagement-2z5en.mongodb.net/${dbName}?retryWrites=true`
const mongoPort = '27017'
const dbConfig = {
  conStr: mongoURI,
  mongoPort,
}
module.exports = dbConfig
