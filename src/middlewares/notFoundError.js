import { createError } from '../utilities'
import { NOT_FOUND_ERROR } from '../constants/StaticConstants'

export default (req, res, next) => {
  next(createError(404, NOT_FOUND_ERROR))
}
