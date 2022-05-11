import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="app__sidebar">
      <Link to='/userlist' className="app__sidebar-logo">CRUD</Link>
      <Link to='/userlist' className="app__sidebar-menu_item">
        <FaUsers />
      </Link>
      <Link to='/addUser' className="app__sidebar-menu_item">
        <BsPlusLg />
      </Link>
    </div>
  );
};

export default Sidebar;
