import { Router } from 'express'
import { createUser, listUsers } from '../controllers/users.controllers.js'

const router = Router()

router
  .get('/', listUsers)
  .post('/', createUser)

export default router
