import express from 'express'
import models from '../database'
import { createError } from '../utilities'
import {
  BUSINESS_TYPE_ADDED_SUCCESSFULLY,
  ERROR_ADDING_BUSINESS_TYPE,
  BUSINESS_TYPE_DELETED_SUCCESSFULLY,
  ERROR_DELETING_BUSINESS_TYPE,
  BUSINESS_TYPE_UPDATED_SUCCESSFULLY,
  ERROR_UPDATING_BUSINESS_TYPE,
  BUSINESS_TYPE_ID_MISSING,
  BUSINESS_TYPE_NOT_FOUND,
  BUSINESS_TYPE_ID_INVALID,
} from '../constants/StaticConstants'

const { BusinessTypes } = models
const router = express.Router()
router.get('/:businessTypeId', (req, res, next) => {
  const {
    params: {
      businessTypeId: id = -1,
    } = {},
  } = req
  if (id === -1) {
    next(createError(400, BUSINESS_TYPE_ID_MISSING))
  }
  BusinessTypes.findAll({
    where: {
      id,
    },
  })
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, BUSINESS_TYPE_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, BUSINESS_TYPE_ID_INVALID))
    })
})

router.get('/', (req, res, next) => {
  BusinessTypes.findAll()
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, BUSINESS_TYPE_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, BUSINESS_TYPE_ID_INVALID))
    })
})

router.delete('/', (req, res, next) => {
  BusinessTypes.destroy()
    .then(() => {
      res.status(200).send({ message: BUSINESS_TYPE_DELETED_SUCCESSFULLY })
    })
    .catch(() => {
      next(createError(400, ERROR_DELETING_BUSINESS_TYPE))
    })
})

router.delete('/:businessTypeId', (req, res, next) => {
  const {
    params: {
      businessTypeId: id = '',
    } = {},
  } = req
  if (id === -1) {
    next(createError(200, BUSINESS_TYPE_ID_MISSING))
    return
  }
  BusinessTypes.destroy({
    where: {
      id,
    },
  })
    .then(() => {
      res.status(200).send({ message: BUSINESS_TYPE_DELETED_SUCCESSFULLY })
    })
    .catch(() => {
      next(createError(400, ERROR_DELETING_BUSINESS_TYPE))
    })
})

router.post('/', (req, res, next) => {
  const {
    body: {
      businessType = '',
    },
  } = req
  BusinessTypes.create({
    businessType,
  })
    .then((response) => {
      res.status(200).json({
        message: BUSINESS_TYPE_ADDED_SUCCESSFULLY,
        DataAdded: response,
      })
    })
    .catch(() => {
      next(createError(400, ERROR_ADDING_BUSINESS_TYPE))
    })
})
router.put('/:businessTypeId?', (req, res, next) => {
  const {
    params: {
      businessTypeId: id = -1,
    } = {},
    body: {
      businessType = '',
    },
  } = req
  let detailsToUpdate = {}
  if (id === -1) {
    next(createError(200, BUSINESS_TYPE_ID_MISSING))
    return
  }
  if (businessType !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      businessType,
    }
  }
  BusinessTypes.update(
    { ...detailsToUpdate },
    {
      where: {
        id,
      },
    },
  )
    .then(() => {
      res.status(200).send({
        message: BUSINESS_TYPE_UPDATED_SUCCESSFULLY,
      })
    })
    .catch(() => {
      next(createError(400, ERROR_UPDATING_BUSINESS_TYPE))
    })
})

export default router
