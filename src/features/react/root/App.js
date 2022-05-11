import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AddUser from '../views/AddUser';
import EditUser from '../views/EditUser';
import UserList from '../views/UserList';

const App = () => {
  return (
    <div className='app__root'>
      <Sidebar />
      <Routes>
        <Route path='/userlist' element={<UserList />}  />
        <Route path='/addUser' element={<AddUser />} />
        <Route path='/users/:userId/edit' element={<EditUser />} />
      </Routes>
    </div>
  )
}

export default App
