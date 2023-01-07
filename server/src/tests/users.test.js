import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userModel from '../users/model/users.model.js'
import { api, getUsers } from './helpers/test.helpers.js'

dotenv.config()

beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_TESTING)
  await userModel.deleteMany({})
  const initialUser = userModel({ username: 'root', password: 'root' })
  initialUser.save()
})

afterEach(async () => {
  await mongoose.connection.close()
})

describe('create a new user', () => {
  test('fresh user', async () => {
    const newUser = { username: 'some user', password: 'some password' }
    await api
      .post('/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const usersList = await getUsers()
    expect(usersList).toHaveLength(usersList.length + 1)
  })
  test('username already taken', async () => {
    const initialUsers = await getUsers()
    const newUser = { username: 'root', password: 'some password' }
    await api
      .post('/users')
      .send(newUser)
      .expect(409)
    const endUsers = await getUsers()
    console.log(endUsers.length)
    expect(endUsers).toHaveLength(initialUsers.length)
  })
})
