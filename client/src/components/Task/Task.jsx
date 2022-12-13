import { useState } from 'react'

export default function Task({ task }) {
  const [taskProps, setTaskProps] = useState({ title: task.title, description: task.description, done: task.done })

  const handleTitle = e => setTaskProps({ ...taskProps, title: e.target.value })
  const handleDescription = e => setTaskProps({ ...taskProps, description: e.target.value })
  const handleDone = e => setTaskProps({ ...taskProps, done: !taskProps.done })
  const handleSubmit = async () => await fetch(`http://localhost:3000/${task._id}`, {
    method: "PATCH",
    body: JSON.stringify(taskProps),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
  return (
    <article>
      <input type="text" defaultValue={taskProps.title} onChange={handleTitle} />
      <input type="text" defaultValue={taskProps.description} onChange={handleDescription} />
      <button onClick={handleDone}>{JSON.stringify(taskProps.done)}</button>
      <button onClick={handleSubmit}>submit</button>
    </article>
  )
}
