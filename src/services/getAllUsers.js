import axios from 'axios';

const getAllProducts = async () =>{
  const URL = `https://users-crud1.herokuapp.com/users/`;
  const req = await axios.get(URL);
  return req
}

export default getAllProducts