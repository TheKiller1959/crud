import { useForm } from 'react-hook-form';
import { useEffect } from "react";
import { editUserById, fetchAllUsers } from "../redux/crudSlice";
import { useDispatch } from "react-redux";

const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: ""
};

const UserForm = ({ onCreate, defValues, onEdit, isEdited, setIsEdited }) => {
  
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (defValues) {
      reset(defValues)
    }
  }, [reset, defValues]);

  const onSubmit = (userObj) => {
    if(!!isEdited) {
      dispatch(editUserById(userObj))
      setIsEdited(false)
      reset(defaultValues)
      dispatch(fetchAllUsers())
    } else {
      onCreate(userObj)
      reset(defaultValues)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <label htmlFor='first_name' >First Name</label>
      <input id='first_name' placeholder='First Name' required='required' {...register("first_name")} />
      <br />
      <label htmlFor='last_name' >Last Name</label>
      <input id='last_name' placeholder='Last Name' required='required' {...register("last_name")} />
      <br />
      <label htmlFor='email' >E-mail</label>
      <input id='email' type='email' placeholder='E-mail' required='required' {...register("email")} />
      <br />
      <label htmlFor='password' >Password</label>
      <input id='password' type='password' placeholder='Password' required='required' {...register("password")} />
      <br />
      <label htmlFor='birthday' >Birthday</label>
      <input id='birthday' type='date' required='required' {...register("birthday")} />
      <br />
      {/* <input {...register("id")} hidden /> */}
      <input type="submit" value={isEdited ? "Edit User" : "Create User"} />
    </form>
  )
};

export default UserForm;