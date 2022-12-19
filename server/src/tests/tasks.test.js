import mongoose from 'mongoose'
import dotenv from 'dotenv'
import taskModel from '../tasks/model/tasks.model.js'
import { api, initialTasks } from './helpers/test.helpers'

dotenv.config()

beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_TESTING)
  await taskModel.deleteMany({})
  for (const task of initialTasks) {
    const taskObject = taskModel(task)
    await taskObject.save()
  }
})

afterEach(async () => {
  await mongoose.connection.close()
})

test('tasks returned as json', async () => {
  await api.get('/')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})
