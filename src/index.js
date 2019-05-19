import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import robots from 'express-robots-txt'
import connectDb from './database'
import errorHandler from './middlewares/errorHandler'
import notFoundError from './middlewares/notFoundError'
import setupServer from './httpServer'
import routes from './routes'

const {
  Users,
  Categories,
  Products,
  Product,
  Qrcodelist,
} = routes
const app = express()
connectDb()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(robots({ UserAgent: '*', Disallow: '/' }))

app.use('/users', Users)
app.use('/categories', Categories)
app.use('/product', Product)
app.use('/products', Products)
app.use('/qrcodelist', Qrcodelist)
app.use(notFoundError)
app.use(errorHandler)

setupServer(app)
