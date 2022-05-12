import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllUsers, updateUser } from '../../redux/userSlice';
const EditUser = () => {
  
  const dispatch = useDispatch();
  const {userId} = useParams();
  const users = useSelector(selectAllUsers);
  const edittedUser =  users.map((user) => user.id === userId ? user : null);
  const [name, setName] = useState(edittedUser[0].name);
  const[surname, setSurname] = useState(edittedUser[0].surname);
  const isDisabled = [name !==  edittedUser[0].name || surname !== edittedUser[0]].every(Boolean)
  
  const handleEditUser = (e) => {
    if(name !==  edittedUser[0].name || surname !== edittedUser[0].surname){
      dispatch(updateUser({name, surname, id: userId}))
    }
    e.preventDefault();
  }

  return (
    <div className='app__editUser'>
      <div className="app__page-header">
        <h2>Edit User Form</h2>
      </div>
      <form className="app__addUser-form" onSubmit={handleEditUser} >
        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Surname..."
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <button disabled={!isDisabled} type="submit" >Update User</button>
      </form>
    </div>
  )
}

export default EditUser