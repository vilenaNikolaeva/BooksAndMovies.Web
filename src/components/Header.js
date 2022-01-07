import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
        <li>
          <Link to="/login"> Login</Link>
        </li>
        <li>
          <Link to="/signup"> SignUp</Link>
        </li>
    </nav>
  );
};

export default Header;
