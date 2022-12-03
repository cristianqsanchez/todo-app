import express from 'express'
import tasksRouter from './tasks/routes/tasks.routes.js'

const app = express()

app.use(express.json())

app.use(tasksRouter)

export default app
