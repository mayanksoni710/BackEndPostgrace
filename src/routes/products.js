import express from 'express'
import QRCode from 'qrcode'
import models from '../database'
import 'babel-polyfill'
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
const { Products } = models
const router = express.Router()
router.get('/:userId/:categoryId/:productId', (req, res, next) => {
  const {
    params: {
      userId = -1,
      categoryId = -1,
      productId: id = -1,
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
  if (id === -1) {
    next(createError(400, PRODUCT_ID_MISSING))
    return
  }
  Products.findAll(
    {
      where: {
        userId,
        categoryId,
        id,
      },
    },
  )
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, PRODUCT_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, UNABLE_TO_FETCH_PRODUCT_RESPONSE))
    })
})

router.get('/:userId/:categoryId', (req, res, next) => {
  const {
    params: {
      userId = -1,
      categoryId = -1,
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
  Products.findAll(
    {
      where: {
        userId,
        categoryId,
      },
    },
  )
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, PRODUCT_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, UNABLE_TO_FETCH_PRODUCT_RESPONSE))
    })
})

router.get('/:userId', (req, res, next) => {
  const {
    params: {
      userId = -1,
    } = {},
  } = req
  if (userId === -1) {
    next(createError(400, USER_ID_MISSING))
    return
  }
  Products.findAll(
    {
      where: {
        userId,
      },
    },
  )
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, PRODUCT_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, UNABLE_TO_FETCH_PRODUCT_RESPONSE))
    })
})

router.delete('/:userId/:categoryId/:productId', (req, res, next) => {
  const {
    params: {
      userId = -1,
      categoryId = -1,
      productId: id = -1,
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
  if (id === -1) {
    next(createError(200, PRODUCT_ID_MISSING))
    return
  }
  Products.destroy({
    where: {
      userId,
      categoryId,
      id,
    },
  })
    .then(() => {
      res.status(200).send({ message: PRODUCT_DELETED_SUCCESSFULLY })
    })
    .catch(() => {
      next(createError(400, ERROR_DELETING_PRODUCT))
    })
})

router.delete('/:userId/:categoryId', (req, res, next) => {
  const {
    params: {
      userId = -1,
      categoryId = -1,
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
  Products.destroy({
    where: {
      userId,
      categoryId,
    },
  })
    .then(() => {
      res.status(200).send({ message: PRODUCT_DELETED_SUCCESSFULLY })
    })
    .catch(() => {
      next(createError(400, ERROR_DELETING_PRODUCT))
    })
})

router.delete('/:userId', (req, res, next) => {
  const {
    params: {
      userId = -1,
    } = {},
  } = req
  if (userId === -1) {
    next(createError(200, USER_ID_MISSING))
    return
  }
  Products.destroy({
    where: {
      userId,
    },
  })
    .then(() => {
      res.status(200).send({ message: PRODUCT_DELETED_SUCCESSFULLY })
    })
    .catch(() => {
      next(createError(400, ERROR_DELETING_PRODUCT))
    })
})

const generateQRandAddProduct = async (dataToConvert, dataResponse, res, next) => {
  try {
    await QRCode.toDataURL(dataToConvert)
      .then((code) => {
        const responseWithQr = dataResponse
        responseWithQr.qRcode = code
        const {
          userId,
          categoryId,
          id,
        } = responseWithQr
        Products.update(
          { qRcode: code },
          {
            where: {
              userId,
              categoryId,
              id,
            },
          },
        )
          .then(() => {
            res.status(200).send({
              message: PRODUCT_ADDED_SUCCESSFULLY,
              data: responseWithQr,
            })
          })
          .catch(() => {
            next(createError(400, ERROR_ADDING_PRODUCT))
          })
        return -1
      })
      .catch(() => {
        next(createError(200, QRCODE_GENERATION_ERROR))
      })
  } catch (err) {
    next(createError(200, QRCODE_GENERATION_ERROR))
  }
  return -1
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
      productUnitPrice = 0,
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

  Products.create({
    userId,
    categoryId,
    productName,
    productDescription,
    productUnitPrice,
    productQuantity: productNewQuantity,
    history: cureentActivity,
    qRcode: '',
  })
    .then((response) => {
      if (response && response.id) {
        generateQRandAddProduct(JSON.stringify({
          id: response.id,
          userId,
          categoryId,
          productName,
          productDescription,
        }), response, res, next)
      }
    })
    .catch(() => {
      next(createError(400, ERROR_ADDING_PRODUCT))
    })
})

router.put('/:userId?/:categoryId?/:productId?', (req, res, next) => {
  const {
    params: {
      userId = -1,
      categoryId = -1,
      productId: id = -1,
    } = {},
    body: {
      productName = -1,
      productDescription = -1,
      productUnitPrice = -1,
      productQuantity = 0,
      productNewQuantity = 0,
      history = 0,
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
  if (id === -1) {
    next(createError(200, PRODUCT_ID_MISSING))
    return
  }
  if (history !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      history: [
        ...history,
        cureentActivity,
      ],
    }
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
  Products.update(
    { ...detailsToUpdate },
    {
      where: {
        userId,
        categoryId,
        id,
      },
    },
  )
    .then((response) => {
      res.status(200).send({
        message: PRODUCT_UPDATED_SUCCESSFULLY,
        data: response,
      })
    })
    .catch(() => {
      next(createError(400, ERROR_UPDATING_PRODUCT))
    })
})

export default router
