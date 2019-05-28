import express from 'express'
import models from '../database'
import { createError } from '../utilities'
import {
  CATEGORY_ADDED_SUCCESSFULLY,
  ERROR_ADDING_CATEGORY,
  CATEGORY_DELETED_SUCCESSFULLY,
  ERROR_DELETING_CATEGORY,
  CATEGORY_UPDATED_SUCCESSFULLY,
  ERROR_UPDATING_CATEGORY,
  CATEGORY_ID_MISSING,
  CATEGORY_NOT_FOUND,
  CATEGORY_ID_INVALID,
  BUSINESS_TYPE_ID_MISSING,
} from '../constants/StaticConstants'

const { Categories } = models
const router = express.Router()
router.get('/:businesstypeId/:categoryId', (req, res, next) => {
  const {
    params: {
      categoryId: id = -1,
      businesstypeId = -1,
    } = {},
  } = req
  if (id === -1) {
    next(createError(400, CATEGORY_ID_MISSING))
  }
  if (businesstypeId === -1) {
    next(createError(400, BUSINESS_TYPE_ID_MISSING))
  }
  Categories.findAll({
    where: {
      id,
      businesstypeId,
    },
  })
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, CATEGORY_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, CATEGORY_ID_INVALID))
    })
})

router.get('/:businesstypeId', (req, res, next) => {
  const {
    params: {
      businesstypeId = -1,
    } = {},
  } = req
  if (businesstypeId === -1) {
    next(createError(400, BUSINESS_TYPE_ID_MISSING))
  }
  Categories.findAll({
    where: {
      businesstypeId,
    },
  })
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, CATEGORY_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, CATEGORY_ID_INVALID))
    })
})

router.get('/', (req, res, next) => {
  Categories.findAll()
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, CATEGORY_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, CATEGORY_ID_INVALID))
    })
})

router.delete('/', (req, res, next) => {
  Categories.destroy()
    .then(() => {
      res.status(200).send({ message: CATEGORY_DELETED_SUCCESSFULLY })
    })
    .catch(() => {
      next(createError(400, ERROR_DELETING_CATEGORY))
    })
})

router.delete('/:businesstypeId', (req, res, next) => {
  const {
    params: {
      businesstypeId = -1,
    } = {},
  } = req
  if (businesstypeId === -1) {
    next(createError(200, BUSINESS_TYPE_ID_MISSING))
    return
  }
  Categories.destroy({
    where: {
      businesstypeId,
    },
  })
    .then(() => {
      res.status(200).send({ message: CATEGORY_DELETED_SUCCESSFULLY })
    })
    .catch(() => {
      next(createError(400, ERROR_DELETING_CATEGORY))
    })
})

router.delete('/:businesstypeId/:categoryId', (req, res, next) => {
  const {
    params: {
      categoryId: id = -1,
      businesstypeId = -1,
    } = {},
  } = req
  if (id === -1) {
    next(createError(200, CATEGORY_ID_MISSING))
    return
  }
  if (businesstypeId === -1) {
    next(createError(200, BUSINESS_TYPE_ID_MISSING))
    return
  }
  Categories.destroy({
    where: {
      id,
      businesstypeId,
    },
  })
    .then(() => {
      res.status(200).send({ message: CATEGORY_DELETED_SUCCESSFULLY })
    })
    .catch(() => {
      next(createError(400, ERROR_DELETING_CATEGORY))
    })
})

router.post('/:businesstypeId', (req, res, next) => {
  const {
    params: {
      businesstypeId = -1,
    } = {},
    body: {
      categoryName = '',
    },
  } = req
  if (businesstypeId === -1) {
    next(createError(200, BUSINESS_TYPE_ID_MISSING))
    return
  }
  Categories.create({
    categoryName,
    businesstypeId,
  })
    .then((response) => {
      res.status(200).json({
        message: CATEGORY_ADDED_SUCCESSFULLY,
        DataAdded: response,
      })
    })
    .catch(() => {
      next(createError(400, ERROR_ADDING_CATEGORY))
    })
})
router.put('/:businesstypeId/:categoryId', (req, res, next) => {
  const {
    params: {
      categoryId: id = -1,
      businesstypeId = -1,
    } = {},
    body: {
      categoryName = -1,
    },
  } = req
  let detailsToUpdate = {}
  if (id === -1) {
    next(createError(200, CATEGORY_ID_MISSING))
    return
  }
  if (categoryName !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      categoryName,
    }
  }
  if (businesstypeId !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      businesstypeId,
    }
  }
  Categories.update(
    { ...detailsToUpdate },
    {
      where: {
        id,
      },
    },
  )
    .then(() => {
      res.status(200).send({
        message: CATEGORY_UPDATED_SUCCESSFULLY,
      })
    })
    .catch(() => {
      next(createError(400, ERROR_UPDATING_CATEGORY))
    })
})

export default router
