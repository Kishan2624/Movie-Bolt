import React from "react";
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className="text-center bg-neutral-600 bg-opacity-35 text-neutral-400 mb-12 lg:mb-0">
        <div className="flex items-center flex-row justify-around h-[40px]">
          <Link to='/'>About</Link>
          <p className=" text-sm ">~ SOLVERA ~</p>
          <Link to='/'>Contact</Link>
        </div>
        
      </footer>
    </>
  );
};

export default Footer;
