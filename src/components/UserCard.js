const UserCard = ({ userObj, onDelete, onEdit }) => {

  return (
    <div>
      <h1>User #{userObj.id}</h1>
      <p>User Name: {userObj.first_name} {userObj.last_name}</p>
      <p>E-Mail: {userObj.email}</p>
      <p>Birthday: {userObj.birthday}</p>
      <span>
        <button onClick={() => onDelete(userObj.id)} >Eliminar</button>
        <button onClick={() => onEdit(userObj)}>Editar</button>
      </span>
    </div>
  )
};

export default UserCard;