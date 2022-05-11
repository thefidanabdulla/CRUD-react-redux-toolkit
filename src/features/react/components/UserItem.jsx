import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
const UserItem = (user) => {
  return (
    <div className="app__userItem">
      <div className="app__userItem-remove">
        <button>
          <BsFillTrashFill />
        </button>
      </div>
      <div className="app__userItem-pic">
        <FaUserAlt />
      </div>
      <div className="app__userItem-desc">
        <p>{user.user.name}</p>
        <p>{user.user.surname}</p>
      </div>
      <button className="app__userItem-editBtn">Edit User</button>
    </div>
  );
};

export default UserItem;
