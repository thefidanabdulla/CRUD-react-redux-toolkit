import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../redux/userSlice";
import UserItem from "../components/UserItem";

const UserList = () => {
  const users = useSelector(selectAllUsers);
  if (users.length === 0) {
    return <div className="app__userlist-noUser">There are no users yet (-_-)</div>;
  } else {
    return (
      <div className="app__userlist-container">
        <div className="app__page-header">
          <h2>User List</h2>
        </div>
        <div className="app__userlist">
          {users.map((user) => (
            <UserItem user={user} />
          ))}
        </div>
      </div>
    );
  }
};

export default UserList;
