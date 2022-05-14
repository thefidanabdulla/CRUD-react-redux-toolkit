import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/userSlice";
import { Link } from "react-router-dom";

const UserItem = ({user}) => {
  const dispatch = useDispatch();
  return (
    <div className="app__userItem">
      <div className="app__userItem-remove">
        <button onClick={() => dispatch(deleteUser(user))}>
          <BsFillTrashFill />
        </button>
      </div>
      <div className="app__userItem-pic">
        <FaUserAlt />
      </div>
      <div className="app__userItem-desc">
        <p>{user.name}</p>
        <p>{user.surname}</p>
      </div>
      <Link to={`/userList/${user.id}/edit`}>
        <button className="app__userItem-editBtn">Update User</button>
      </Link>
    </div>
  );
};

export default UserItem;
