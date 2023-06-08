import React from 'react';
import {  Link } from "react-router-dom";

const Navbar = () =>{
  return (
  <div>
    <li>
      <Link to="/">00 Home</Link>
    </li>
    <li>
      <Link to="/">01 Destination</Link>
    </li>
    <li>
      <Link to="/">02 Crew</Link>
    </li>
    <li>
      <Link to="/">03 Technology</Link>
    </li>
  </div>
  );
}
export default Navbar;