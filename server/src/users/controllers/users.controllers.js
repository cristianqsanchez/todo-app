import userModel from '../model/users.model.js'
import bcrypt from 'bcrypt'

export const listUsers = async (req, res) => {
  const users = await userModel.find().populate('tasks')
  return res.send(users)
}

export const createUser = async (req, res) => {
  const { username, password } = req.body
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)
  const user = userModel({ username, password: passwordHash })
  await user.save()
  return res.send()
}
