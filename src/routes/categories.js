import express from 'express'
import mongoose from 'mongoose'
import uniqid from 'uniqid'
import Categories from '../database/models/categories.model'
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

const router = express.Router()
router.get('/:userId?', (req, res, next) => {
  const {
    params: {
      userId = -1,
    } = {},
  } = req
  if (userId === -1) {
    next(createError(400, USER_ID_MISSING))
  }
  Categories.find({ userId }, { _id: 0 })
    .exec()
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, USER_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, USER_ID_INVALID))
    })
})

router.delete('/', (req, res, next) => {
  const {
    userId = '',
    categoryId = '',
  } = req.body
  if (userId === -1) {
    next(createError(200, USER_ID_MISSING))
    return
  }
  if (categoryId === -1) {
    next(createError(200, CATEGORY_ID_MISSING))
    return
  }
  Categories.deleteOne(
    {
      userId,
      categoryId,
    },
    (err) => {
      if (err) next(createError(400, ERROR_DELETING_CATEGORY))
      res.status(200).send({ message: CATEGORY_DELETED_SUCCESSFULLY })
    },
  )
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
  const newCategory = new Categories({
    _id: new mongoose.Types.ObjectId(),
    categoryId: uniqid.time(),
    userId,
    categoryName,
  })
  newCategory.save()
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, CATEGORY_ADDED_SUCCESSFULLY))
    })
    .catch(() => {
      next(createError(400, ERROR_ADDING_CATEGORY))
    })
})
router.put('/:userId?/:categoryId?', (req, res, next) => {
  const {
    params: {
      userId = -1,
      categoryId = -1,
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
  if (categoryId === -1) {
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
    { userId, categoryId },
    { ...detailsToUpdate },
    (err) => {
      if (err) { next(createError(400, ERROR_UPDATING_CATEGORY)) }
      next(createError(200, CATEGORY_UPDATED_SUCCESSFULLY))
    },
  )
})

export default router
