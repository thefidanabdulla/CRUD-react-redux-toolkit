import React from "react";
import { selectAllUsers } from "../../redux/userSlice";
import UserItem from "../components/UserItem";
console.log(selectAllUsers);
const UserList = () => {
  const user = {
    name: "Fidan",
    surname: "Abdulla",
  };
  return (
    <div className="app__userlist-container">
      <div className="app__page-header">
        <h2>User List</h2>
      </div>
      <div className="app__userlist">
        <UserItem user={user} />
      </div>
    </div>
  );
};

export default UserList;
