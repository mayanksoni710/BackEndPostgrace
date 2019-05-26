import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import robots from 'express-robots-txt'
import { sequelize } from './database'
import errorHandler from './middlewares/errorHandler'
import notFoundError from './middlewares/notFoundError'
import setupServer from './httpServer'
import routes from './routes'

const {
  Users,
  Categories,
  Products,
  Qrcodelist,
} = routes
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(robots({ UserAgent: '*', Disallow: '/' }))

app.use('/users', Users)
app.use('/categories', Categories)
app.use('/products', Products)
app.use('/qrcodelist', Qrcodelist)
app.use(notFoundError)
app.use(errorHandler)

sequelize.sync().then(async () => {
  setupServer(app)
})
