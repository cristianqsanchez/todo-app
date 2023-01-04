import express from 'express'
import tasksRouter from './tasks/routes/tasks.routes.js'
import usersRouter from './users/routes/users.routes.js'

const app = express()

app.use(express.json())

app.use(tasksRouter)
app.use('/users', usersRouter)

export default app
