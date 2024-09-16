import React from "react";
import logo from "../assets/J.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="my logo" />
      </div>
      <div className="m-8 flex item-center justify-center gap-4 text-3xl">
        <a href="https://github.com/haojun141">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/haojun.zhou/">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/haojun-zhou-8ba39b186/">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
