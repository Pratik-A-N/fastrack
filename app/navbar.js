import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/Assets/logo.svg";
import arrowdown from "../public/Assets/arrow_down.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import playstore from '../public/Assets/play_store_icon.svg';
import appstore from '../public/Assets/app_store_icon.svg';

import { usePathname } from "next/navigation";


function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "",
    },
    {
      id: 2,
      link: "Learn",
    },
    {
      id: 3,
      link: ["Events", {name: "Host Competition", link:"event/host"}, {name: "School Workshops", link:"event/workshop"}],
    },
    {
      id: 4,
      link: ["Downloads", "Play Store", "App Store", "Launch Web App"],
    },
    {
      id: 5,
      link: {name: "about us", link: "about"},
    },
    {
      id: 6,
      link: "Login/Signup",
    },
  ];
  return (
    <div className="rounded-lg flex justify-between custom-bg px-10 py-6">
      <div className="flex items-center">
        <Image src={logo} alt="Fastrack Club logo" className="logo" />
      </div>
      <div className="menu flex items-center">
        <ul className="hidden md:flex items-center">
          {links.map(({ id, link }) =>
            id == 2 ? (
              <Dropdown key={id}>
                <DropdownTrigger>
                  <li
                    key={id}
                    className="nav-links px-4 cursor-pointer capitalize font-medium  hover:scale-105 hover:text-white duration-200 link-underline"
                  >
                    
                      <div className="flex">
                        <div>{link}</div>
                        <div><Image src={arrowdown}  /></div>
                      </div>
                       
                    
                  </li>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new">
                    <Link href={''} className="text-black">
                      Join Competition
                    </Link>
                  </DropdownItem>
                  <DropdownItem key="copy" className="text-black">Rupee 101 (Coming Soon)</DropdownItem>
                  <DropdownItem key="edit" className="text-black">Blogs (Comming Soon)</DropdownItem>
                  
                </DropdownMenu>
              </Dropdown>
            ) : id == 3 ? (
              <Dropdown key={id}>
                <DropdownTrigger>
                  <li
                    key={id}
                    className="nav-links px-4 cursor-pointer capitalize font-medium  hover:scale-105 hover:text-white duration-200 link-underline"
                  >
                    <div className="flex">
                        <div>{link[0]}</div>
                        <div><Image src={arrowdown}  /></div>
                      </div>
                  </li>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new" className="text-black">
                    <Link href={link[1].link}>{link[1].name}</Link>
                  </DropdownItem>
                  <DropdownItem key="copy" className="text-black">
                    <Link href={link[2].link}>{link[2].name}</Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : id == 4 ? (
              <Dropdown key={id}>
                <DropdownTrigger>
                  <li
                    key={id}
                    className="nav-links px-4 cursor-pointer capitalize font-medium  hover:scale-105 hover:text-white duration-200 link-underline"
                  >
                    <div className="flex">
                        <div>{link[0]}</div>
                        <div><Image src={arrowdown}  /></div>
                      </div>
                  </li>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new" className="text-black">
                    <Link href={link[1]}>
                      <div className="flex items-center">
                        <div><Image src={playstore} /></div>
                        <div className="pl-2">{link[1]}</div>
                      </div>
                    </Link>
                  </DropdownItem>
                  <DropdownItem key="copy" className="text-black">
                    <Link href={link[2]}>
                      <div className="flex items-center">
                        <div><Image src={appstore} /></div>
                        <div className="pl-2">{link[2]}</div>
                      </div>
                    </Link>
                  </DropdownItem>
                  <DropdownItem key="edit" className="text-black">
                  <Link href={link[3]}>{link[3]}</Link>
                  </DropdownItem>
             
                </DropdownMenu>
              </Dropdown>
            ) : id == 5 ?
            <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium  hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link.link}>
            <div className="flex">
                <div>{link.name}</div>
                
              </div>
            </Link>
          </li>
            : id == 6 ? (
              <button key={id} className="btn-bg-grn px-3 py-3 rounded-lg mx-2">
                {link}
              </button>
            ) : (
              <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium  hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>
                <div>Home</div>
            </Link>
          </li>
            )
          )}
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
