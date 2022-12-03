import taskModel from '../model/tasks.model.js'

export const listTasks = async (req, res, next) => {
  try {
    const tasks = await taskModel.find().lean()
    return res.send(tasks)
  } catch (error) {
    return next(error)
  }
}

export const createTask = async (req, res, next) => {
  try {
    const task = taskModel(req.body)
    await task.save()
    return res.send()
  } catch (error) {
    return next(error)
  }
}

export const updateTask = async (req, res, next) => {
  try {
    const taskId = req.params.id
    const updatedTask = req.body
    await taskModel.findByIdAndUpdate(taskId, updatedTask)
    return res.send()
  } catch (error) {
    return next(error)
  }
}

export const deleteTask = async (req, res, next) => {
  try {
    const taskId = req.params.id
    await taskModel.findByIdAndDelete(taskId)
    return res.send()
  } catch (error) {
    return next(error)
  }
}
