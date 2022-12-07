export default function Task({ task }) {
  return (
    <article>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </article>
  )
}
