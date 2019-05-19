import mongoose from 'mongoose'

const usersSchema = mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  userId: String,
  name: String,
  gender: String,
  age: Number,
  email: String,
  address: String,
})

export default mongoose.model('users', usersSchema, 'users')
