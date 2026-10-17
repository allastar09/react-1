
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const api = 'https://to-dos-api.softclub.tj/api/to-dos'

  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [editId, setEditId] = useState(null)

  async function get() {
    try {
      const { data } = await axios.get(api)
      setUsers(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function add() {

    try {
      if (editId !== null) {
        await axios.put(api, {
          id: editId,
          name: name,
          description: description
        })
        setEditId(null)
      } else {
        const form = new FormData()
        form.append('name', name)
        form.append('description', description)
        form.append('isCompleted', false)

        await axios.post(api, form)
      }

      setName('')
      setDescription('')
      get()
    } catch (error) {
      console.log(error)
    }
  }

  function edit(user) {
    setName(user.name)
    setDescription(user.description)
    setEditId(user.id)
  }

  async function del(id) {
    try {
      await axios.delete(api + '?id=' + id)
      get()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    get()
  }, [])

  return (
    <div className="container">
      <h1>Simple CRUD</h1>

      <div className="form">
        <input
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <button onClick={add}>
          {editId !== null ? 'Save' : 'Add'}
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.description}</td>
              <td>
                {user.isCompleted ? 'Active' : 'Inactive'}
              </td>
              <td>
                <button onClick={() => edit(user)}>
                  Edit
                </button>

                <button onClick={() => del(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App

App.css
