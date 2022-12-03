import { createTask, deleteTask, listTasks, updateTask } from '../controllers/tasks.controllers.js'
import { Router } from 'express'

const router = Router()

router
  .get('/', listTasks)
  .post('/', createTask)
  .patch('/:id', updateTask)
  .delete('/:id', deleteTask)

export default router
