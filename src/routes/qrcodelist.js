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
const createHtmlResponseForQr = (res, dataResponse) => {
  dataResponse.map(({ productName, qRcode }) => res.write(`<div><div>${productName}</div><img height="50px" width="50px" src="${qRcode}" /></div>`))
}
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

  Products.find({ userId, categoryId }, { _id: 0, productName: 1, qRcode: 1 })
    .exec()
    .then((dataResponse) => {
      if (dataResponse) res.status(200).send(createHtmlResponseForQr(res, dataResponse))
      else next(createError(200, PRODUCT_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, UNABLE_TO_FETCH_PRODUCTS_RESPONSE))
    })
})
export default router
