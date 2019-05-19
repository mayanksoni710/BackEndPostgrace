import mongoose from 'mongoose'

const categoriesSchema = mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  userId: String,
  categoryId: String,
  categoryName: String,
})

export default mongoose.model('categories', categoriesSchema, 'categories')
