import useTaskProps from './hooks/useTaskProps'
import patchTask from './services/patchTask'
import styles from './Task.module.css'

export default function Task ({ task }) {
  const { taskProps, handleTitle, handleDescription, handleDone } = useTaskProps({ task })

  return (
    <article className={styles.task}>
      <div>
        <input type='text' defaultValue={taskProps.title} onChange={handleTitle} className={styles.title} />
        <input type='text' defaultValue={taskProps.description} onChange={handleDescription} />
      </div>
      <input id='input' type='checkbox' defaultChecked={taskProps.done} onClick={handleDone} className={styles.checkBox} />
      <button onClick={() => patchTask({ taskProps })}>Ok</button>
    </article>
  )
}
