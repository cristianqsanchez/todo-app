const api = 'http://localhost:3000'

export default async function patchTask({ taskProps }) {
  const headers = {
    method: "PATCH",
    body: JSON.stringify(taskProps),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  }
  return await fetch(`${api}/${taskProps._id}`, headers)
}
