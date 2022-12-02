import { Schema, model } from 'mongoose'

const TaskSchema = Schema(
  {
    title: { type: String, required: true, trim: true, unique: true },
    description: String,
    done: { type: Boolean, default: false }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const taskModel = model('tasks', TaskSchema)

export default taskModel
