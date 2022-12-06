const api = 'http://localhost:3000'

export default async function fetchTasks() {
  const response = await fetch(api)
  const data = await response.json()
  return data
}
