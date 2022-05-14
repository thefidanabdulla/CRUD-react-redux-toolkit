import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";

const AddUser = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const dispatch = useDispatch();
  const isDisabled = [name, surname].every(Boolean)

  const handleSubmitUser = (e) => {
    if(isDisabled){
      e.preventDefault();
      dispatch(addUser({name, surname, id: nanoid()}))
    }
  }

  return (
    <div className="app__addUser">
      <div className="app__page-header">
        <h2>Add User Form</h2>
      </div>
      <form className="app__addUser-form" onSubmit={handleSubmitUser}>
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
        <button disabled={!isDisabled} type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
