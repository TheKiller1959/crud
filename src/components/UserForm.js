import { useForm } from 'react-hook-form';
import { useEffect } from "react";

const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: ""
};

const UserForm = ({ onCreate, defValues, onEdit }) => {

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (defValues) {
      reset(defValues)
    }
  }, [reset, defValues]);

  const onSubmit = (res) => {
    onCreate(res)
    reset(defaultValues)
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
      <input type="submit" value="Create User" {...register("CreateUser")}/>
      <input type="submit" value="Edit User" {...register("editUser")}/>
    </form>
  )
};

export default UserForm;