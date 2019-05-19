import express from 'express'
import mongoose from 'mongoose'
import uniqid from 'uniqid'
import Users from '../database/models/users.model'
import { createError } from '../utilities'
import {
  USER_NOT_FOUND,
  USER_ID_INVALID,
  USER_DELETED_SUCCESSFULLY,
  USER_ADDED_SUCCESSFULLY,
  ERROR_DELETING_USER,
  ERROR_ADDING_USER,
  USER_UPDATED_SUCCESSFULLY,
  ERROR_UPDATING_USER,
  USER_ID_MISSING,
} from '../constants/StaticConstants'

const router = express.Router()
router.get('/', (req, res, next) => {
  Users.find({}, { _id: 0 })
    .exec()
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, USER_NOT_FOUND))
    })
    .catch(() => {
      next(createError(400, USER_ID_INVALID))
    })
})
router.delete('/:userId?', (req, res, next) => {
  const {
    params: {
      userId = -1,
    } = {},
  } = req
  if (userId === -1) {
    next(createError(200, USER_ID_MISSING))
    return
  }
  Users.deleteOne({ userId }, (err) => {
    if (err) next(createError(400, ERROR_DELETING_USER))
    res.status(200).send({ message: USER_DELETED_SUCCESSFULLY })
  })
})

router.post('/', (req, res, next) => {
  const {
    body: {
      name = -1,
      gender = -1,
      age = -1,
      email = -1,
      address = -1,
    },
  } = req
  const newUser = new Users({
    _id: new mongoose.Types.ObjectId(),
    userId: uniqid.time(),
    name,
    gender,
    age,
    email,
    address,
  })
  newUser.save()
    .then((response) => {
      if (response) res.status(200).json(response)
      else next(createError(200, USER_ADDED_SUCCESSFULLY))
    })
    .catch(() => {
      next(createError(400, ERROR_ADDING_USER))
    })
})

router.put('/:userId?', (req, res, next) => {
  const {
    params: {
      userId = -1,
    } = {},
    body: {
      name = -1,
      gender = -1,
      age = -1,
      email = -1,
      address = -1,
    },
  } = req
  let detailsToUpdate = {}
  if (userId === -1) {
    next(createError(200, USER_ID_MISSING))
    return
  }
  if (name !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      name,
    }
  }
  if (gender !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      gender,
    }
  }
  if (age !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      age,
    }
  }
  if (email !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      email,
    }
  }
  if (address !== -1) {
    detailsToUpdate = {
      ...detailsToUpdate,
      address,
    }
  }
  Users.update(
    { userId },
    { ...detailsToUpdate },
    (err) => {
      if (err) { next(createError(400, ERROR_UPDATING_USER)) }
      next(createError(200, USER_UPDATED_SUCCESSFULLY))
    },
  )
})


export default router
