import express from 'express'
import models from '../database'
import { createError } from '../utilities'
import {
  USER_NOT_FOUND,
  USER_ID_INVALID,
  USER_ID_MISSING,
  CATEGORY_ADDED_SUCCESSFULLY,
  ERROR_ADDING_CATEGORY,
  CATEGORY_DELETED_SUCCESSFULLY,
  ERROR_DELETING_CATEGORY,
  CATEGORY_UPDATED_SUCCESSFULLY,
  ERROR_UPDATING_CATEGORY,
  CATEGORY_ID_MISSING,
} from '../constants/StaticConstants'

const { Categories } = models
const router = express.Router()
router.get('/:userId?/:categoryId?', (req, res, next) => {
  const {
    params: {
      userId = -1,
      categoryId: id = -1,
    } = {},
  } = req
  if (userId === -1) {
    next(createError(400, USER_ID_MISSING))
  }
  if (id === -1) {
    next(createError(400, CATEGORY_ID_MISSING))
  }
  Categories.findAll({
    where: {
      userId,
      id,
    },
  })
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, USER_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, USER_ID_INVALID))
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
  Categories.findAll({
    where: {
      userId,
    },
  })
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, USER_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, USER_ID_INVALID))
    })
})

router.delete('/:userId/:categoryId', (req, res, next) => {
  const {
    params: {
      userId = '',
      categoryId: id = '',
    } = {},
  } = req
  if (userId === -1) {
    next(createError(200, USER_ID_MISSING))
    return
  }
  if (id === -1) {
    next(createError(200, CATEGORY_ID_MISSING))
    return
  }
  Categories.destroy({
    where: {
      userId,
      id,
    },
  })
    .then(() => {
      res.status(200).send({ message: CATEGORY_DELETED_SUCCESSFULLY })
    })
    .catch(() => {
      next(createError(400, ERROR_DELETING_CATEGORY))
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

  Categories.destroy({
    where: {
      userId,
    },
  })
    .then(() => {
      res.status(200).send({ message: CATEGORY_DELETED_SUCCESSFULLY })
    })
    .catch(() => {
      next(createError(400, ERROR_DELETING_CATEGORY))
    })
})

router.post('/:userId?', (req, res, next) => {
  const {
    params: {
      userId = -1,
    } = {},
    body: {
      categoryName = '',
    },
  } = req
  Categories.create({
    userId,
    categoryName,
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
router.put('/:userId?/:categoryId?', (req, res, next) => {
  const {
    params: {
      userId = -1,
      categoryId: id = -1,
    } = {},
    body: {
      categoryName = '',
    },
  } = req
  let detailsToUpdate = {}
  if (userId === -1) {
    next(createError(200, USER_ID_MISSING))
    return
  }
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
  Categories.update(
    { ...detailsToUpdate },
    {
      where: {
        userId,
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
