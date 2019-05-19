import mongoose from 'mongoose'
import dbConfig from './config'

export default () => {
  const {
    conStr = '',
  } = dbConfig
  mongoose.connect(conStr, { useNewUrlParser: true })
  mongoose.connection.on('connected', () => {
    console.log("DB connection Successful congrats") // eslint-disable-line
  })
  mongoose.connection.on('error', (err) => {
  console.log('DB connection Failed..', err) // eslint-disable-line
  })
}
