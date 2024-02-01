import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../public/Assets/logo.svg'
import { FaBars, FaTimes } from "react-icons/fa";



function Navbar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "learn",
    },
    {
      id: 3,
      link: "events",
    },
    {
      id: 4,
      link: "downloads",
    },
    {
      id: 5,
      link: "about us",
    },
    {
      id: 6,
      link: "Login/Signup",
    },
  ];
  return (
    <div className="rounded-lg flex justify-between custom-bg px-10 py-6">
      <div className="flex items-center">
        <Image
          src={logo}
          alt="Fastrack Club logo"
          className="logo"
        />
      </div>
      <div className="menu flex items-center">
      <ul className="hidden md:flex items-center">
        {links.map(({ id, link }) => (
          id == 6 ? 
            <button key={id} className="btn-bg-grn px-3 py-3 rounded-lg mx-2">
                {link}
              </button>
           :   
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium  hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10  md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
}

export default Navbar;
