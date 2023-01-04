import { Schema, model } from 'mongoose'

const UserSchema = Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'tasks' }]
  },
  {
    versionKey: false
  }
)

const taskModel = model('users', UserSchema)

export default taskModel
