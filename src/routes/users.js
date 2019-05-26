import express from 'express'
import models from '../database'
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

const { Users } = models
const router = express.Router()
router.get('/:userId', (req, res, next) => {
  const {
    params: {
      userId: id = -1,
    } = {},
  } = req
  Users.findAll({
    where: {
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

router.get('/', (req, res, next) => {
  Users.findAll()
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
      userId: id = -1,
    } = {},
  } = req
  if (id === -1) {
    next(createError(200, USER_ID_MISSING))
    return
  }
  Users.destroy({
    where: {
      id,
    },
  })
    .then(() => {
      res.status(200).send({ message: USER_DELETED_SUCCESSFULLY })
    })
    .catch(() => {
      next(createError(400, ERROR_DELETING_USER))
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
  Users.create({
    name,
    gender,
    age,
    email,
    address,
  })
    .then((response) => {
      res.status(200).json({
        message: USER_ADDED_SUCCESSFULLY,
        DataAdded: response,
      })
    })
    .catch(() => {
      next(createError(400, ERROR_ADDING_USER))
    })
})

router.put('/:userId?', (req, res, next) => {
  const {
    params: {
      userId: id = -1,
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
  if (id === -1) {
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
    { ...detailsToUpdate },
    {
      where: {
        id,
      },
    },
  )
    .then(() => {
      res.status(200).send({
        message: USER_UPDATED_SUCCESSFULLY,
      })
    })
    .catch(() => {
      next(createError(400, ERROR_UPDATING_USER))
    })
})


export default router
