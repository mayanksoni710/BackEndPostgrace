import express from 'express'
import models from '../database'
import { createError } from '../utilities'
import {
  SUPPLIER_ADDED_SUCCESSFULLY,
  ERROR_ADDING_SUPPLIER,
  SUPPLIER_DELETED_SUCCESSFULLY,
  ERROR_DELETING_SUPPLIER,
  SUPPLIER_UPDATED_SUCCESSFULLY,
  ERROR_UPDATING_SUPPLIER,
  SUPPLIER_ID_MISSING,
  SUPPLIER_NOT_FOUND,
  SUPPLIER_ID_INVALID,
  USER_ID_MISSING,
  ERROR_FETCHING_SUPPLIER,
} from '../constants/StaticConstants'

const { Suppliers } = models
const router = express.Router()
router.get('/:userId/:supplierId', (req, res, next) => {
  const {
    params: {
      userId = -1,
      supplierId: id = -1,
    } = {},
  } = req
  if (userId === -1) {
    next(createError(400, USER_ID_MISSING))
  }
  if (id === -1) {
    next(createError(400, SUPPLIER_ID_MISSING))
  }
  Suppliers.findAll({
    where: {
      id,
      userId,
    },
  })
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, SUPPLIER_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, SUPPLIER_ID_INVALID))
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
  Suppliers.findAll({
    where: {
      userId,
    },
  })
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, SUPPLIER_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, SUPPLIER_ID_INVALID))
    })
})

router.get('/', (req, res, next) => {
  Suppliers.findAll()
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, SUPPLIER_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, ERROR_FETCHING_SUPPLIER))
    })
})

router.delete('/', (req, res, next) => {
  Suppliers.destroy()
    .then(() => {
      res.status(200).send({ message: SUPPLIER_DELETED_SUCCESSFULLY })
    })
    .catch(() => {
      next(createError(400, ERROR_DELETING_SUPPLIER))
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
  Suppliers.destroy({
    where: {
      userId,
    },
  })
    .then(() => {
      res.status(200).send({ message: SUPPLIER_DELETED_SUCCESSFULLY })
    })
    .catch(() => {
      next(createError(400, ERROR_DELETING_SUPPLIER))
    })
})

router.delete('/:userId/:supplierId', (req, res, next) => {
  const {
    params: {
      userId = -1,
      supplierId: id = -1,
    } = {},
  } = req
  if (userId === -1) {
    next(createError(200, USER_ID_MISSING))
    return
  }
  if (id === -1) {
    next(createError(200, SUPPLIER_ID_MISSING))
    return
  }
  Suppliers.destroy({
    where: {
      id,
      userId,
    },
  })
    .then(() => {
      res.status(200).send({ message: SUPPLIER_DELETED_SUCCESSFULLY })
    })
    .catch(() => {
      next(createError(400, ERROR_DELETING_SUPPLIER))
    })
})

router.post('/:userId', (req, res, next) => {
  const {
    params: {
      userId = -1,
    } = {},
    body: {
      supplierName = '',
      supplierDetails = '',
    },
  } = req
  if (userId === -1) {
    next(createError(200, USER_ID_MISSING))
    return
  }
  Suppliers.create({
    supplierName,
    supplierDetails,
    userId,
  })
    .then((response) => {
      res.status(200).json({
        message: SUPPLIER_ADDED_SUCCESSFULLY,
        DataAdded: response,
      })
    })
    .catch(() => {
      next(createError(400, ERROR_ADDING_SUPPLIER))
    })
})
router.put('/:userId/:supplierId', (req, res, next) => {
  const {
    params: {
      userId = -1,
      supplierId: id = -1,
    } = {},
    body: {
      supplierName = -1,
      supplierDetails = -1,
    },
  } = req
  let detailsToUpdate = {}
  if (userId === -1) {
    next(createError(200, USER_ID_MISSING))
    return
  }
  if (id === -1) {
    next(createError(200, SUPPLIER_ID_MISSING))
    return
  }
  if (userId !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      userId,
    }
  }
  if (supplierName !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      supplierName,
    }
  }
  if (supplierDetails !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      supplierDetails,
    }
  }
  Suppliers.update(
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
        message: SUPPLIER_UPDATED_SUCCESSFULLY,
      })
    })
    .catch(() => {
      next(createError(400, ERROR_UPDATING_SUPPLIER))
    })
})

export default router
