/* eslint-disable no-console */
import Sequelize from 'sequelize'
import dbConfig from './config'
import Users from './models/users.model'
import Products from './models/products.model'
import Categories from './models/categories.model'
import BusinessTypes from './models/business_types.model'
import Suppliers from './models/suppliers.model'
import Orders from './models/orders.model'

const {
  conStr = '',
} = dbConfig
const sequelize = new Sequelize(conStr)
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

const models = {
  Users: Users(sequelize, Sequelize),
  Products: Products(sequelize, Sequelize),
  Categories: Categories(sequelize, Sequelize),
  BusinessTypes: BusinessTypes(sequelize, Sequelize),
  Suppliers: Suppliers(sequelize, Sequelize),
  Orders: Orders(sequelize, Sequelize),
}

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models)
  }
})

export { sequelize }
export default models
