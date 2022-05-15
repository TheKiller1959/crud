import { useEffect, useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserCard from './components/UserCard';
import createNewUser from './services/createNewUser';
import deleteUser from './services/deleteUser';
import editUser from './services/editUser';
import { fetchAllUsers } from "./redux/crudSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {

  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({});
  const [deleteId, setDeleteId] = useState('');
  const [editDefValues, setEditDefValues] = useState({});
  const [editFormRes, setEditFormRes] = useState({});

  const dispatch = useDispatch();
  const { list } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchAllUsers())
      .then((res) => {
        setUsers(res.data)
      })
  }, []);

  useEffect(() => {
    if (newUser.first_name) {
      createNewUser(newUser)
        .then((res) => {
          setUsers([...users, res.data])
          setNewUser({})
        })
    }
  }, [newUser, users])

  useEffect(() => {
    const filterUser = (id) => {
      const newArr = users.filter((user) => id !== user.id);
      return newArr
    }
    if (deleteId) {
      deleteUser(deleteId)
        .then(() => {
          setUsers(filterUser(deleteId))
        })
    }
  }, [deleteId, users]);

  useEffect(() => {
    const filterUser = (id) => {
      const newArr = users.filter((user) => id !== user.id)
      return newArr
    }
    if (editFormRes.id) {
      editUser(editFormRes.id, editFormRes)
        .then((res) => {
          setUsers([res.data, ...filterUser(editFormRes.id)])
          setEditFormRes({})
        })
    }
  }, [editFormRes, users]);

  const handlerOnCreateUser = (event) => {
    setNewUser(event)
  };

  const handlerOnDelete = (id) => {
    setDeleteId(id)
  };

  const handlerOnEdit = (editUser) => {
    setEditDefValues(editUser)
  };

  const userList = users.map((user) => <UserCard userObj={user} onDelete={handlerOnDelete} onEdit={handlerOnEdit} key={user.id} />);

  return (
    <div className="App">
      <header className="App-header">
        <UserForm onCreate={handlerOnCreateUser} onEdit={handlerOnEdit} defValues={editDefValues} />
        <span>
          {userList}
        </span>
      </header>
    </div>
  )
};

export default App;