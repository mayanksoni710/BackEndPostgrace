import express from 'express'
import Products from '../database/models/products.model'
import { createError } from '../utilities'
import {
  PRODUCT_NOT_FOUND,
  CATEGORY_ID_MISSING,
  USER_ID_MISSING,
  UNABLE_TO_FETCH_PRODUCTS_RESPONSE,
} from '../constants/StaticConstants'

const router = express.Router()
router.get('/:userId?/:categoryId?', (req, res, next) => {
  const {
    params: {
      categoryId = -1,
      userId = -1,
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

  Products.find({ userId, categoryId }, { _id: 0 })
    .exec()
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, PRODUCT_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, UNABLE_TO_FETCH_PRODUCTS_RESPONSE))
    })
})
export default router
