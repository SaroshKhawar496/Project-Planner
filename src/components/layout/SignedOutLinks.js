import React from "react";
import { NavLink } from "react-router-dom";

//with navlink you get the active attribute vs link

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup">SignUp</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Log In</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
