import express from 'express'
import models from '../database'
import { createError } from '../utilities'
import {
  ORDER_ADDED_SUCCESSFULLY,
  ERROR_ADDING_ORDER,
  ORDER_DELETED_SUCCESSFULLY,
  ERROR_DELETING_ORDER,
  ORDER_UPDATED_SUCCESSFULLY,
  ERROR_UPDATING_ORDER,
  ORDER_ID_MISSING,
  ORDER_NOT_FOUND,
  ORDER_ID_INVALID,
  USER_ID_MISSING,
  USER_ID_INVALID,
} from '../constants/StaticConstants'

const { Orders } = models
const router = express.Router()
router.get('/:userId/:orderId', (req, res, next) => {
  const {
    params: {
      userId = -1,
      orderId: id = -1,
    } = {},
  } = req
  if (userId === -1) {
    next(createError(400, USER_ID_MISSING))
  }
  if (id === -1) {
    next(createError(400, ORDER_ID_MISSING))
  }
  Orders.findAll({
    where: {
      id,
      userId,
    },
  })
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, ORDER_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, ORDER_ID_INVALID))
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
  }
  Orders.findAll({
    where: {
      userId,
    },
  })
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, ORDER_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, USER_ID_INVALID))
    })
})

router.get('/', (req, res, next) => {
  Orders.findAll()
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, ORDER_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, ORDER_ID_INVALID))
    })
})

router.delete('/', (req, res, next) => {
  Orders.destroy()
    .then(() => {
      res.status(200).send({ message: ORDER_DELETED_SUCCESSFULLY })
    })
    .catch(() => {
      next(createError(400, ERROR_DELETING_ORDER))
    })
})

router.delete('/:userId', (req, res, next) => {
  const {
    params: {
      userId = '',
    } = {},
  } = req
  if (userId === -1) {
    next(createError(200, USER_ID_MISSING))
    return
  }
  Orders.destroy({
    where: {
      userId,
    },
  })
    .then(() => {
      res.status(200).send({ message: ORDER_DELETED_SUCCESSFULLY })
    })
    .catch(() => {
      next(createError(400, ERROR_DELETING_ORDER))
    })
})

router.delete('/:userId/:orderId', (req, res, next) => {
  const {
    params: {
      userId = -1,
      orderId: id = -1,
    } = {},
  } = req
  if (userId === -1) {
    next(createError(200, USER_ID_MISSING))
    return
  }
  if (id === -1) {
    next(createError(200, ORDER_ID_MISSING))
    return
  }
  Orders.destroy({
    where: {
      id,
      userId,
    },
  })
    .then(() => {
      res.status(200).send({ message: ORDER_DELETED_SUCCESSFULLY })
    })
    .catch(() => {
      next(createError(400, ERROR_DELETING_ORDER))
    })
})

router.post('/:userId', (req, res, next) => {
  const {
    params: {
      userId = -1,
    } = {},
    body: {
      products = -1,
      discountPercentageApplied = -1,
      totalAmount = -1,
      amountPaid = -1,
      amountPending = -1,
      supplierId = -1,
      isSuplierOrder = -1,
      orderActiveStatus = -1,
    },
  } = req
  Orders.create({
    userId,
    products,
    discountPercentageApplied,
    totalAmount,
    amountPaid,
    amountPending,
    supplierId,
    isSuplierOrder,
    orderActiveStatus,
  })
    .then((response) => {
      res.status(200).json({
        message: ORDER_ADDED_SUCCESSFULLY,
        DataAdded: response,
      })
    })
    .catch(() => {
      next(createError(400, ERROR_ADDING_ORDER))
    })
})
router.put('/:userId/:orderId?', (req, res, next) => {
  const {
    params: {
      userId = -1,
      orderId: id = -1,
    } = {},
    body: {
      products = -1,
      discountPercentageApplied = -1,
      amountPaid = -1,
      amountPending = -1,
      totalAmount = -1,
      supplierId = -1,
      isSuplierOrder = false,
      orderActiveStatus = false,
    },
  } = req
  let detailsToUpdate = {}
  if (userId === -1) {
    next(createError(200, USER_ID_MISSING))
    return
  }
  if (id === -1) {
    next(createError(200, ORDER_ID_MISSING))
    return
  }
  if (products !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      products,
    }
  }
  if (discountPercentageApplied !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      discountPercentageApplied,
    }
  }
  if (totalAmount !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      totalAmount,
    }
  }
  if (amountPaid !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      amountPaid,
    }
  }
  if (amountPending !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      amountPending,
    }
  }
  if (supplierId !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      supplierId,
    }
  }
  if (isSuplierOrder !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      isSuplierOrder,
    }
  }
  if (orderActiveStatus !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      orderActiveStatus,
    }
  }

  Orders.update(
    { ...detailsToUpdate },
    {
      where: {
        id,
        userId,
      },
    },
  )
    .then(() => {
      res.status(200).send({
        message: ORDER_UPDATED_SUCCESSFULLY,
      })
    })
    .catch(() => {
      next(createError(400, ERROR_UPDATING_ORDER))
    })
})

export default router
