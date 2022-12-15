import useTaskProps from './hooks/useTaskProps'
import patchTask from './services/patchTask'
import styles from './Task.module.css'

export default function Task({ task }) {
  const { taskProps, handleTitle, handleDescription, handleDone } = useTaskProps({ task })

  return (
    <article className={styles.task}>
      <div>
        <input type="text" defaultValue={taskProps.title} onChange={handleTitle} className={styles.title}/>
        <input type="text" defaultValue={taskProps.description} onChange={handleDescription} />
      </div>
      <button onClick={handleDone}>{JSON.stringify(taskProps.done)}</button>
      <button onClick={() => patchTask({ taskProps })}>submit</button>
    </article>
  )
}
