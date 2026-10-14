import { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';

const rows = [
  { name: 'Fasehuddin', id: 1, age: 18, status: true },
  { name: 'Andaleb', id: 2, age: 18, status: true },
  { name: 'Ahmad', id: 3, age: 18, status: false },
  { name: 'Alimuhammad', id: 4, age: 19, status: false },
];

export default function DenseTable() {

  // user - нынешний изменившийся массив
  // func - функция каторая и обновляет этот самый массив

  const [users, func] = useState(rows);

  // ID редактируемого пользователя
  const [editId, setEditId] = useState(null);

  // Данные в форме
  const [editUser, setEditUser] = useState({
    name: '',
    status: true,
  });

  // Удаление
  const handleDelete = (id) => {
    func((prev) => prev.filter((user) => user.id !== id));
  };

  // Открытие редактирования
  const handleEdit = (user) => {
    setEditId(user.id);

    setEditUser({
      name: user.name,
      status: user.status,
    });
  };

  // Сохранение изменений
  const handleSave = () => {
    func((prev) =>
      prev.map((user) =>
        user.id === editId
          ? { ...user, ...editUser }
          : user
      )
    );

    setEditId(null);
  };

  // Добавление пользователя
  const handleAdd = () => {
    const newUser = {
      id: Date.now(),
      name: 'New user',
      age: 18,
      status: true,
    };

    func((prev) => [...prev, newUser]);

    setEditId(newUser.id);
    setEditUser({
      name: newUser.name,
      status: newUser.status,
    });
  };

  return (
    <TableContainer component={Paper}>
      <Button
        variant="contained"
        color="success"
        startIcon={<AddIcon />}
        onClick={handleAdd}
        sx={{ m: 2 }}
      >
        Add
      </Button>

      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>

              <TableCell>
                {editId === row.id ? (
                  <input
                    value={editUser.name}
                    onChange={(e) =>
                      setEditUser((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                     style={{
    border: '1px solid #999',
    borderRadius: '4px',
    padding: '8px',
    outline: 'none',
  }}
                  />
                ) : (
                  row.name
                )}
              </TableCell>

              <TableCell align="right">
                {row.age}
              </TableCell>

              <TableCell align="right">
                {editId === row.id ? (
                  <select
                    value={String(editUser.status)}
                    onChange={(e) =>
                      setEditUser((prev) => ({
                        ...prev,
                        status: e.target.value === 'true',
                      }))
                    }
                  >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>
                ) : (
                  row.status ? 'Active' : 'Inactive'
                )}
              </TableCell>

              <TableCell align="right">
                {editId === row.id ? (
                  <Button
                    color="success"
                    onClick={handleSave}
                  >
                    <SaveIcon />
                  </Button>
                ) : (
                  <>
                    <Button
                      color="error"
                      onClick={() => handleDelete(row.id)}
                    >
                      <DeleteIcon />
                    </Button>

                    <Button
                      color="primary"
                      onClick={() => handleEdit(row)}
                    >
                      <EditIcon />
                    </Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}