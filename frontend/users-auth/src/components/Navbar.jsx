import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h1>Auth DB</h1>
      </Link>
      <ul>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/signup">
          <li>Sign Up</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
