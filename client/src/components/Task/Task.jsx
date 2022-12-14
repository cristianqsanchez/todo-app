import useTaskProps from './hooks/useTaskProps'
import patchTask from './services/patchTask'

export default function Task({ task }) {
  const { taskProps, handleTitle, handleDescription, handleDone } = useTaskProps({ task })

  return (
    <article>
      <input type="text" defaultValue={taskProps.title} onChange={handleTitle} />
      <input type="text" defaultValue={taskProps.description} onChange={handleDescription} />
      <button onClick={handleDone}>{JSON.stringify(taskProps.done)}</button>
      <button onClick={() => patchTask({ taskProps })}>submit</button>
    </article>
  )
}
