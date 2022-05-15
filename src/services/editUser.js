import axios from 'axios';

const editUser = async(userObj) => {
  const URL = `https://users-crud1.herokuapp.com/users/${userObj.id}/`;
  const req = await axios.put(URL, userObj);
  return req.data
}

export default editUser;