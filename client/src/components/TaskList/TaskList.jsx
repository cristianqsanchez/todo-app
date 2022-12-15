import useTasks from './hooks/useTasks'
import Task from '../Task/Task'
import styles from './TaskList.module.css'

export default function TaskList() {
  const { tasks } = useTasks()
  return (
    <section className={styles.taskList}>
      {tasks.map(task => {
        return (
          <Task key={task._id} task={task} />
        )
      })}
    </section>
  )
}
