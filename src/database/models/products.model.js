import mongoose from 'mongoose'

const productsSchema = mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  userId: String,
  productId: String,
  categoryId: String,
  productName: String,
  productDescription: String,
  productUnitPrice: Number,
  productQuantity: Number,
  history: Array,
  qRcode: String,
})

export default mongoose.model('products', productsSchema, 'products')
