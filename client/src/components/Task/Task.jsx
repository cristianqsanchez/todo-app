import { useState } from 'react'

export default function Task({ task }) {
  const [item, setItem] = useState({ task })

  const handleTitle = e => setItem({ ...item, title: e.target.value })
  const handleDescription = e => setItem({ ...item, description: e.target.value })
  const handleDone = e => setItem({ ...item, done: !item.done })
  const handleSubmit = async () => await fetch(`http://localhost:3000/${task._id}`, {
    method: "PATCH",
    body: JSON.stringify(item),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
  return (
    <article>
      <input type="text" defaultValue={task.title} onChange={handleTitle} />
      <input type="text" defaultValue={task.description} onChange={handleDescription} />
      <button onClick={handleDone}>{'done'}</button>
      <button onClick={handleSubmit}>{'submit'}</button>
    </article>
  )
}
