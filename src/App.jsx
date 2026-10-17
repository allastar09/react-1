import React, { useEffect, useState } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Field } from "@/components/ui/field"

import axios from 'axios'

const App = () => {
  const api = 'https://to-dos-api.softclub.tj'

  const [user, setData] = useState([])
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)
  const [image, setImage] = useState(null)
  const [search, setSearch] = useState('')
  const [editId, setEditId] = useState(null)

  async function get() {
    try {
      const { data } = await axios.get(api + '/api/to-dos')
      setData(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  async function post() {
    try {
      let form = new FormData()
      form.append('name', name)
      form.append('description', description)
      form.append('isCompleted', isCompleted)

      if (image && image.length > 0) {
        for (let i = 0; i < image.length; i++) {
          form.append('Images', image[i])
        }
      }

      await axios.post(`${api}/api/to-dos`, form)

      get()
      setName('')
      setDescription('')
      setIsCompleted(false)
      setImage(null)
      setOpen(false)
    } catch (error) {
      console.error(error)
    }
  }

  async function edit() {
    try {
      await axios.put(`${api}/api/to-dos`, {
        id: editId,
        name,
        description,
        isCompleted
      })

      get()
      setOpen(false)
      setEditId(null)
      setName('')
      setDescription('')
      setIsCompleted(false)
    } catch (error) {
      console.error(error)
    }
  }

  async function del(id) {
    try {
      await axios.delete(`${api}/api/to-dos?id=${id}`)
      get()
    } catch (error) {
      console.error(error)
    }
  }

  async function delImg(id) {
    try {
      await axios.delete(`${api}/api/to-dos/images/${id}`)
      get()
    } catch (error) {
      console.error(error)
    }
  }

  async function check(id, isCompleted) {
    try {
      await axios.put(`${api}/api/to-dos`, {
        id,
        isCompleted
      })
      get()
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    get()
  }, [])

  const filter = user.filter(el =>
    el.name.toLowerCase().includes(search.toLowerCase().trim())
  )

  return (
    <div>
      <Field orientation="horizontal" className="flex">
        <Input
          type="search"
          placeholder="Search..."
          className="w-[50%] m-auto mt-[30px]"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </Field>

      <ButtonGroup className="p-[30px] ml-[70px]">
        <Button
          variant="secondary"
          onClick={() => {
            setEditId(null)
            setName('')
            setDescription('')
            setIsCompleted(false)
            setOpen(true)
          }}
        >
          Add User +
        </Button>
        <ButtonGroupSeparator />
      </ButtonGroup>

      <Table className="w-[90%] m-auto mt-[70px] border">
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filter.map(el => (
            <TableRow key={el.id}>
              <TableCell>
                {el.images.map(e => (
                  <div key={e.id} className="flex">
                    <img
                      src={`${api}/images/${e.imageName}`}
                      width="50"
                      alt=""
                    />
                    <button
                      className="border w-[90px] h-[50px] text-red-500"
                      onClick={() => delImg(e.id)}
                    >
                      del img
                    </button>
                  </div>
                ))}
              </TableCell>

              <TableCell>{el.name}</TableCell>
              <TableCell>{el.description}</TableCell>

              <TableCell>
                {el.isCompleted ? 'Active' : 'Inactive'}
              </TableCell>

              <TableCell>
                <input
                  type="checkbox"
                  checked={el.isCompleted}
                  onChange={() => check(el.id, !el.isCompleted)}
                />

                <Button
                  variant="outline"
                  className="ml-3"
                  onClick={() => {
                    setEditId(el.id)
                    setName(el.name)
                    setDescription(el.description)
                    setIsCompleted(el.isCompleted)
                    setOpen(true)
                  }}
                >
                  Edit
                </Button>

                <Button
                  variant="destructive"
                  onClick={() => del(el.id)}
                  className="ml-3"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editId !== null ? 'Edit User' : 'Добавить пользователя'}
            </DialogTitle>
            <DialogDescription>
              Заполните данные задачи.
            </DialogDescription>
          </DialogHeader>

          <Input
            placeholder="Имя"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <Input
            placeholder="Описание"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <Input
            type="file"
            name="images"
            accept="image/*"
            onChange={e => setImage(e.target.files)}
          />

          <select
            className="rounded-lg border p-1.25"
            value={String(isCompleted)}
            onChange={e => setIsCompleted(e.target.value === 'true')}
          >
            <option value="false">Inactive</option>
            <option value="true">Active</option>
          </select>

          <DialogFooter>
            <Button
              onClick={() => {
                setOpen(false)
                setEditId(null)
              }}
              variant="outline"
            >
              Отмена
            </Button>

            <Button onClick={() => editId !== null ? edit() : post()}>
              {editId !== null ? 'Save' : 'Add User'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}



export default App