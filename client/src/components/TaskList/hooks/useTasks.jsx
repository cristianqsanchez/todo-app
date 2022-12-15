import { useState, useEffect } from 'react'
import fetchTasks from '../services/fetchTasks'

export default function useTasks () {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetchTasks()
      .then(task => setTasks(task))
  }, [])
  return { tasks }
}
