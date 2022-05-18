import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectUserById, updateUser } from '../../redux/userSlice';
const EditUser = () => {
  
  const dispatch = useDispatch();
  const {userId} = useParams();
  const user = useSelector(state => selectUserById(state, userId));
  console.log(user);
  const [name, setName] = useState(user.name);
  const[surname, setSurname] = useState(user.surname);
  const isDisabled = [name !==  user.name || surname !== user.surname].every(Boolean)
  
  const handleEditUser = (e) => {
    e.preventDefault();
    if(name !==  user.name || surname !== user.surname){
      dispatch(updateUser({name, surname, id: userId}))

      //console.log({name, surname, id: userId});
    }
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