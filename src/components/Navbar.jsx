import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-11 py-2.5 shadow-lg">
      <div className="flex items-center gap-4 text-black">
        <div>
          <Link to="/">
            <img src="/img/logo.png" alt="recman-logo" className="w-2/5" />
          </Link>
        </div>
      </div>
      <div>
        <ul className="flex items-center gap-4 font-[Figtree] font-semibold text-black">
          <li
            className="text-decoration-none hover:text-decoration-underline hover:text-decoration-2 group"
          >
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-decoration-none hover:text-decoration-underline hover:text-decoration-2 group">
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li className="text-decoration-none hover:text-decoration-underline hover:text-decoration-2 group">
            <NavLink to="/service">Services</NavLink>
          </li>
          <li className="text-decoration-none hover:text-decoration-underline hover:text-decoration-2 group">
            <NavLink to="/project">Projects</NavLink>
          </li>
          <li className="text-decoration-none hover:text-decoration-underline hover:text-decoration-2 group">
            <NavLink to="/faq">FAQs</NavLink>
          </li>
          <li className="rounded-full bg-red-500 px-2 py-1 text-white">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
