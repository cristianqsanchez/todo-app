import app from '../../app'
import supertest from 'supertest'

export const api = supertest(app)

export const initialTasks = [
  {
    title: 'test title',
    description: 'test description'
  },
  {
    title: 'awesome title',
    description: 'awesome description',
    done: true
  }
]

export const getTasks = async () => {
  const response = await api.get('/')
  return response.body
}

export const getUsers = async () => {
  const response = await api.get('/users')
  return response.body
}
