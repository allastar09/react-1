import React, { useEffect, useState } from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"

const App = () => {
  const [user, setUser] = useState([]);
  const [triger, setTriger] = useState(false);
  const [loading, setLoading] = useState(false)
  const [editId, seteditId] = useState()
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('')
  const [description, setDescription] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const api = 'https://to-dos-api.softclub.tj/api/to-dos';

  async function get() {
  
    try {
      const resp = await fetch(api);
      const data = await resp.json();
      setUser(data.data);
    } catch (error) {
      console.error(error);
     
    }
  }

  const deleteUser = async (id) => {
    try {
      await fetch(`${api}/${id}`, {
        method: "DELETE",
      });

      get();
    } catch (error) {
      console.error(error);
    }
  };

  const addUser = async ()=>{
    try {
      let response = await fetch(api,{
        method:'POST', 
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          description: description,
          isCompleted: isCompleted
        })
      })

      setName('')
      setIsCompleted(false)
      setDescription('')
      get()
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get();
  }, [triger]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="mx-auto max-w-5xl">

        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">
            Users
          </h1>

        <div className='flex items-center gap-[30px]'>

          <button
            onClick={() => setTriger(prev=> !prev)}
            className="rounded-md bg-[#1e1e73] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#3030a0]"
            >
            Обновить данные
          </button>
          <Button variant="secondary" className='w-[110px] h-[40.70px] bg-[green] text-[white] hover:bg-[#35d335] text-[17px]'
            onClick={()=> setOpen(true) }
          >
              Add +
            </Button>
          </div>

        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Добавить Пользвателя</DialogTitle>
              <DialogDescription>
                дайте дури
              </DialogDescription>
            </DialogHeader>

            <Input placeholder="Имя" value={name}  
            onChange={(e) => setName(e.target.value)} 
            />
            <Input placeholder="Description/Описание Пользвателя" value={description} 
            onChange={(e)=> setDescription(e.target.value)} 
            />

            <select name="" id="" className='border p-[5px] rounded-[7px]'
             value={isCompleted.toString()}
             onChange={(e) => setIsCompleted(e.target.value === 'true')}   
             >
              <option value="false" >Inactive</option>
              <option value="true">Active</option>
            </select>

            <DialogFooter>
              <Button onClick={() => setOpen(false)} variant="outline">
                Отмена
              </Button>
              <button className='border p-[5px] rounded-[10px] bg-[blue] text-[white]'
              onClick={addUser}
              >
                Add User
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
          <Table>
            <TableCaption className="pb-4">
              Список пользователей
            </TableCaption>

            <TableHeader>
              <TableRow className="bg-gray-100 hover:bg-gray-100">

                {/* <TableHead className="w-[30%] px-6 py-4 font-bold text-gray-700">
                  Avatar
                </TableHead> */}

                <TableHead className="w-[30%] px-6 py-4 font-bold text-gray-700">
                  Name
                </TableHead>

                <TableHead className="w-[25%] px-6 py-4 font-bold text-gray-700">
                  description
                </TableHead>

                <TableHead className="w-[25%] px-6 py-4 font-bold text-gray-700">
                  Status
                </TableHead>

                <TableHead className="w-[20%] px-6 py-4 text-right font-bold text-gray-700">
                  Actions
                </TableHead>

              </TableRow>
            </TableHeader>

            <TableBody>
              {user.map((el) => (
                <TableRow
                  key={el.id}
                  className="transition hover:bg-gray-50"
                >

                    {/* <TableCell className="px-6 py-4 font-medium text-gray-900">
                    <img src={el.avatar} alt="" className='w-[50px] rounded-[50%]' />
                  </TableCell> */}

                  <TableCell className="px-6 py-4 font-medium text-gray-900">
                    
                    {el.name}
                  </TableCell>

                  <TableCell className="px-6 py-4 text-gray-600">
                    {el.description}
                  </TableCell>

                  <TableCell className="px-6 py-4">
                    <span  className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                        el.isCompleted
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"}`}>
                      {el.isCompleted ? "Active" : "Inactive"}
                    </span>
                  </TableCell>

                  <TableCell className="px-6 py-4 text-right">
                    <button
                      onClick={() => deleteUser(el.id)}
                      className="rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600">
                      Delete
                    </button>
                    {/* <button 
                    onClick={()=> }
                    >
                      Edit
                    </button> */}
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TableCell colSpan={4} className="px-6 py-4 text-gray-500">
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>

        </div>
      </div>
    </div>
  );
};

export default App;