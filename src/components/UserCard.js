import { AiOutlineMail } from "react-icons/ai";
import { FaBirthdayCake, FaPencilAlt, FaRegTrashAlt, FaUserAlt } from "react-icons/fa";


const UserCard = ({ userObj, onDelete, onEdit }) => {

  return (
    <div className="usr-card">
      <div>
        <h2><FaUserAlt /> {userObj.first_name} {userObj.last_name}</h2>
        <p><AiOutlineMail /> {userObj.email}</p>
        <p><FaBirthdayCake /> {userObj.birthday}</p>
      </div>
      <div className="usr-btn">
        <button onClick={() => onDelete(userObj.id)} ><FaRegTrashAlt /></button>
        <button onClick={() => onEdit(userObj)}><FaPencilAlt /></button>
      </div>
    </div>
  )
};

export default UserCard;