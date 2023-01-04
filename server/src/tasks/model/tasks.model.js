import { Schema, model } from 'mongoose'

const TaskSchema = Schema(
  {
    title: { type: String, required: true, trim: true, unique: true },
    description: String,
    done: { type: Boolean, default: false },
    user: { type: Schema.Types.ObjectId, ref: 'users' }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const taskModel = model('tasks', TaskSchema)

export default taskModel
