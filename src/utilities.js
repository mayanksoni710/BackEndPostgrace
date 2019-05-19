// skipping default export as we can have multiple utility function later
// eslint-disable-next-line import/prefer-default-export
export const createError = (
  status,
  errMsg,
) => {
  const error = new Error(errMsg)
  error.status = status
  return error
}

export const currentDateIst = () => {
  let indiaTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
  indiaTime = new Date(indiaTime)
  return indiaTime
}
