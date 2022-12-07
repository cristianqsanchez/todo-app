import useTasks from './hooks/useTasks'
import Task from '../Task/Task'

export default function TaskList() {
  const { tasks } = useTasks()
  return (
    <section>
      {tasks.map(task => {
        return (
          <Task key={task._id} task={task} />
        )
      })}
    </section>
  )
}
