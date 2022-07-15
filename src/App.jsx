import { useEffect, useState } from 'react';
import './assets/styles/App.css';
import UserForm from './components/UserForm';
import UserCard from './components/UserCard';
import { createUser, deleteUserById, fetchAllUsers } from "./redux/crudSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {

  const [newUser, setNewUser] = useState({});
  const [deleteId, setDeleteId] = useState('');
  const [editDefValues, setEditDefValues] = useState({});
  const [isEdited, setIsEdited] = useState(false);

  const dispatch = useDispatch();
  const { list } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  useEffect(() => {
    if (newUser.first_name) {
      dispatch(createUser(newUser))
    }
  }, [newUser, dispatch])

  useEffect(() => {
    if (deleteId) {
      dispatch(deleteUserById(deleteId))
    }
  }, [deleteId, dispatch]);

  const handlerOnCreateUser = (event) => {
    setNewUser(event)
  };

  const handlerOnDelete = (id) => {
    setDeleteId(id)
  };

  const handlerOnEdit = (userObj) => {
    setEditDefValues(userObj)
    setIsEdited(true)
  };

  const userList = list.map((user) => <UserCard userObj={user} onDelete={handlerOnDelete} onEdit={handlerOnEdit} key={user.id} />);

  return (
    <div className="App">
      <div className='userform'>
        <UserForm onCreate={handlerOnCreateUser} onEdit={handlerOnEdit} defValues={editDefValues} isEdited={isEdited} setIsEdited={setIsEdited} />
      </div>
      <div className='userlist'>
        {userList}
      </div>
    </div>
  )
};

export default App;