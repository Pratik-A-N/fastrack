import React from "react";
import Image from "next/image";
import logo from '../public/Assets/logo.svg'


function Navbar() {
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
        <div className="learn font-bold  mx-8">
            Learn
        </div>
        <div className="events font-bold mx-8">
            Events
        </div>
        <div className="about font-bold mx-8">
            Download
        </div>
        <div className="about font-bold mx-8">
            About us
        </div>
        <div className="launch font-semibold ml-8">
              <button className="btn-bg-grn px-3 py-3 rounded-lg">
                Login/Signup
              </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
