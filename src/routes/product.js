import express from 'express'
import mongoose from 'mongoose'
import uniqid from 'uniqid'
import QRCode from 'qrcode'
import 'babel-polyfill'
import Products from '../database/models/products.model'
import {
  createError,
  currentDateIst,
} from '../utilities'
import {
  USER_ID_MISSING,
  PRODUCT_NOT_FOUND,
  UNABLE_TO_FETCH_PRODUCT_RESPONSE,
  PRODUCT_ID_MISSING,
  CATEGORY_ID_MISSING,
  PRODUCT_ADDED_SUCCESSFULLY,
  PRODUCT_DELETED_SUCCESSFULLY,
  ERROR_DELETING_PRODUCT,
  ERROR_ADDING_PRODUCT,
  ERROR_UPDATING_PRODUCT,
  PRODUCT_UPDATED_SUCCESSFULLY,
  PRODUCT_HISTORY_TYPES,
  QRCODE_GENERATION_ERROR,
} from '../constants/StaticConstants'

const {
  CREATED,
  QUANTITY_UPDATED,
} = PRODUCT_HISTORY_TYPES
const router = express.Router()
router.get('/:userId?/:categoryId?/:productId?', (req, res, next) => {
  const {
    params: {
      userId = -1,
      categoryId = -1,
      productId = -1,
    } = {},
  } = req
  if (userId === -1) {
    next(createError(400, USER_ID_MISSING))
    return
  }
  if (categoryId === -1) {
    next(createError(400, CATEGORY_ID_MISSING))
    return
  }
  if (productId === -1) {
    next(createError(400, PRODUCT_ID_MISSING))
    return
  }
  Products.find({ userId, categoryId, productId }, { _id: 0 })
    .exec()
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, PRODUCT_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, UNABLE_TO_FETCH_PRODUCT_RESPONSE))
    })
})

router.delete('/:userId?/:categoryId?/:productId?', (req, res, next) => {
  const {
    params: {
      userId = -1,
      categoryId = -1,
      productId = -1,
    } = {},
  } = req
  if (userId === -1) {
    next(createError(200, USER_ID_MISSING))
    return
  }
  if (categoryId === -1) {
    next(createError(200, CATEGORY_ID_MISSING))
    return
  }
  if (productId === -1) {
    next(createError(200, PRODUCT_ID_MISSING))
    return
  }
  Products.deleteOne(
    {
      userId,
      categoryId,
      productId,
    },
    (err) => {
      if (err) next(createError(400, ERROR_DELETING_PRODUCT))
      res.status(200).send({ message: PRODUCT_DELETED_SUCCESSFULLY })
    },
  )
})

const saveProduct = (qRcode, productId, cureentActivity, req, res, next) => {
  const {
    params: {
      userId = -1,
      categoryId = -1,
    } = {},
    body: {
      productName = '',
      productDescription = '',
      productUnitPrice = 0,
      productNewQuantity = 0,
    },
  } = req
  const newProduct = new Products({
    _id: new mongoose.Types.ObjectId(),
    productId,
    userId,
    categoryId,
    productName,
    productDescription,
    productUnitPrice,
    productQuantity: productNewQuantity,
    history: cureentActivity,
    qRcode,
  })
  newProduct.save()
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, PRODUCT_ADDED_SUCCESSFULLY))
    })
    .catch(() => {
      next(createError(400, ERROR_ADDING_PRODUCT))
    })
}

const generateQRandAddProduct = async (data, productId, cureentActivity, req, res, next) => {
  try {
    return saveProduct(await QRCode.toDataURL(data), productId, cureentActivity, req, res, next)
  } catch (err) {
    next(createError(200, QRCODE_GENERATION_ERROR))
    return -1
  }
}

router.post('/:userId?/:categoryId?', (req, res, next) => {
  const {
    params: {
      userId = -1,
      categoryId = -1,
    } = {},
    body: {
      productName = '',
      productDescription = '',
      productQuantity = 0,
      productNewQuantity = 0,
    },
  } = req
  let cureentActivity = [{
    date: currentDateIst(),
    type: CREATED,
    message: 'Product Added succesfully in system',
  }]
  if (productQuantity !== productNewQuantity) {
    cureentActivity = [
      ...cureentActivity,
      {
        date: currentDateIst(),
        type: QUANTITY_UPDATED,
        oldValue: productQuantity,
        updatedValue: productNewQuantity,
        message: `quantity updated from ${productQuantity} to ${productNewQuantity}`,
      }]
  }
  if (userId === -1) {
    next(createError(200, USER_ID_MISSING))
    return
  }
  if (categoryId === -1) {
    next(createError(200, CATEGORY_ID_MISSING))
    return
  }
  const productId = uniqid.time()
  generateQRandAddProduct(JSON.stringify({
    productId,
    userId,
    categoryId,
    productName,
    productDescription,
  }), productId, cureentActivity, req, res, next)
})

router.put('/:userId?/:categoryId?/:productId?', (req, res, next) => {
  const {
    params: {
      userId = -1,
      categoryId = -1,
      productId = -1,
    } = {},
    body: {
      productName = -1,
      productDescription = -1,
      productUnitPrice = -1,
      productQuantity = 0,
      productNewQuantity = 0,
    },
  } = req
  let cureentActivity = []
  if (productQuantity !== productNewQuantity) {
    cureentActivity = [{
      date: currentDateIst(),
      type: QUANTITY_UPDATED,
      oldValue: productQuantity,
      updatedValue: productNewQuantity,
      message: `quantity updated from ${productQuantity} to ${productNewQuantity}`,
    }]
  }
  let detailsToUpdate = {}
  if (userId === -1) {
    next(createError(200, USER_ID_MISSING))
    return
  }
  if (categoryId === -1) {
    next(createError(200, CATEGORY_ID_MISSING))
    return
  }
  if (productId === -1) {
    next(createError(200, PRODUCT_ID_MISSING))
    return
  }
  detailsToUpdate = {
    ...detailsToUpdate,
    $push: { history: cureentActivity },
  }
  if (productName !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      productName,
    }
  }
  if (productDescription !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      productDescription,
    }
  }
  if (productUnitPrice !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      productUnitPrice,
    }
  }
  if (productQuantity !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      productQuantity: productNewQuantity,
    }
  }
  Products.update({
    userId,
    categoryId,
    productId,
  },
  {
    ...detailsToUpdate,
  }, (err) => {
    if (err) { next(createError(400, ERROR_UPDATING_PRODUCT)) }
    next(createError(200, PRODUCT_UPDATED_SUCCESSFULLY))
  })
})

export default router
