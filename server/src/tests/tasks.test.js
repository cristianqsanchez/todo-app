import mongoose from 'mongoose'
import dotenv from 'dotenv'
import taskModel from '../tasks/model/tasks.model.js'
import { api, initialTasks, getTasks } from './helpers/test.helpers'

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

describe('HTTP:GET /', () => {
  test('should return as json', async () => {
    await api
      .get('/')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
  test('should return all tasks', async () => {
    const taskList = await getTasks()
    expect(taskList).toHaveLength(initialTasks.length)
  })
  test('should return a specific task', async () => {
    const taskList = await getTasks()
    const { title, description } = taskList[0]
    expect({ title, description }).toStrictEqual(initialTasks[0])
  })
})

describe('HTTP:POST /', () => {
  test('should create a task to do', async () => {
    const newTask = { title: 'new task', description: 'new description' }
    await api
      .post('/')
      .send(newTask)
      .expect(200)
    const taskList = await getTasks()
    expect(taskList).toHaveLength(initialTasks.length + 1)
  })
})

describe('HTTP:PATCH /', () => {
  test('should edit a task', async () => {
    const taskList = await getTasks()
    const task = taskList[0]
    await api
      .patch(`/${task._id}`)
      .send({ description: 'new description' })
      .expect(200)
  })
})

describe('HTTP:DELETE /', () => {
  test('should delete a task', async () => {
    const taskList = await getTasks()
    const task = taskList[0]
    await api
      .delete(`/${task._id}`)
      .expect(200)
  })
})
