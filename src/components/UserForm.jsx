import { useForm } from 'react-hook-form';
import { useEffect } from "react";
import { editUserById, fetchAllUsers } from "../redux/crudSlice";
import { useDispatch } from "react-redux";
import { FaUserAlt, FaBirthdayCake, FaLock } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

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
    if (!!isEdited) {
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
    <form className='user-form' onSubmit={handleSubmit(onSubmit)} >
      <div className='user-field'>
        <label htmlFor='first_name' ><p><FaUserAlt /></p></label>
        <input id='first_name' placeholder='First Name' required {...register("first_name")} />
        <br />
        <label htmlFor='last_name' ></label>
        <input id='last_name' placeholder='Last Name' required {...register("last_name")} />
      </div>
      <div className='user-field'>
        <label htmlFor='email' ><p><AiOutlineMail /></p></label>
        <input id='email' type='email' placeholder='E-mail' required {...register("email")} />
      </div>
      <div className='user-field'>
        <label htmlFor='password' ><p><FaLock /></p></label>
        <input id='password' type='password' placeholder='Password' required {...register("password")} />
      </div>
      <div className='user-field'>
        <label htmlFor='birthday' ><p><FaBirthdayCake /></p></label>
        <input id='birthday' type='date' required {...register("birthday")} />
      </div>
      <div className="submit">
        <input id='submit' type="submit" value={isEdited ? "Upload" : "Sign Up"} />
        {isEdited && (<input id='submit' type="submit" value='Cancel' />)}
      </div>
    </form>
  )
};

export default UserForm;