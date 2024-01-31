import React from "react";
import Image from "next/image";
import logo from '../public/Assets/logo.svg'


function Navbar() {
  return (
    <div className="rounded-lg flex justify-between custom-bg px-10 py-8">
      <div className="logo">
        <Image
          src={logo}
          width={200}
          height={100}
          alt="Fastrack Club logo"
        />
      </div>
      <div className="menu flex">
        <div className="learn font-bold  mx-8">
            Learn
        </div>
        <div className="events font-bold mx-8">
            Events
        </div>
        <div className="about font-bold mx-8">
            About us
        </div>
        <div className="launch font-semibold ml-8">
            Launch App
        </div>
      </div>
    </div>
  );
}

export default Navbar;
