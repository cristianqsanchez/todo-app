import { useState } from 'react'

export default function useTaskProps({ task }) {
  const [taskProps, setTaskProps] = useState({
    _id: task._id,
    title: task.title,
    description: task.description,
    done: task.done
  })

  const handleTitle = e => setTaskProps({ ...taskProps, title: e.target.value })
  const handleDescription = e => setTaskProps({ ...taskProps, description: e.target.value })
  const handleDone = e => setTaskProps({ ...taskProps, done: !taskProps.done })

  return { taskProps, handleTitle, handleDescription, handleDone }
}
