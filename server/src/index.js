import app from './app.js'
import { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3000

const MONGODB_URL = process.env.MONGODB_URL

const main = async () => {
  connect(MONGODB_URL)
  app.listen(PORT)
}

main()
