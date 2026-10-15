
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Бежан",
      email: "bejan@gmail.com",
      role: "Blogger",
    },
    {
      id: 2,
      name: "Али",
      email: "ali@gmail.com",
      role: "Developer",
    },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !role.trim()) {
      return;
    }

    if (editId !== null) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === editId
            ? { ...user, name, email, role }
            : user
        )
      );
    } else {
      const newUser = {
        id: Date.now(),
        name,
        email,
        role,
      };

      setUsers((prevUsers) => [...prevUsers, newUser]);
    }

    setName("");
    setEmail("");
    setRole("");
    setEditId(null);
  }

  function handleEdit(user) {
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
    setEditId(user.id);
  }

  function handleDelete(id) {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== id)
    );

    if (editId === id) {
      setName("");
      setEmail("");
      setRole("");
      setEditId(null);
    }
  }

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email} ${user.role}`
      .toLowerCase()
      .includes(search.toLowerCase().trim())
  );

  return (
    <div className="p-6 space-y-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-end gap-4"
      >
        <Field className="w-[220px]">
          <FieldLabel>Имя</FieldLabel>
          <Input
            placeholder="Введите имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Field>

        <Field className="w-[220px]">
          <FieldLabel>Email</FieldLabel>
          <Input
            type="email"
            placeholder="Введите email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>

        <Field className="w-[180px]">
          <FieldLabel>Роль</FieldLabel>
          <Input
            placeholder="Blogger"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </Field>

        <ButtonGroup>
          <Button type="submit">
            {editId !== null ? "Save changes" : "Add user"}
          </Button>

          {editId !== null && (
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setName("");
                setEmail("");
                setRole("");
                setEditId(null);
              }}
            >
              Cancel
            </Button>
          )}
        </ButtonGroup>
      </form>

      <Field className="w-full max-w-[450px]">
        <FieldLabel>Поиск пользователей</FieldLabel>
        <Input
          placeholder="Имя, email или роль..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Field>

      <Table className="border">
        <TableCaption>
          Всего пользователей: {filteredUsers.length}
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Имя</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Роль</TableHead>
            <TableHead>Действия</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell className="font-medium">
                  {user.name}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </Button>

                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                Пользователи не найдены
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default App;