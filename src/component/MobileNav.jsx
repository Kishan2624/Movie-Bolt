import React from "react";
import { NavLink } from "react-router-dom";
import { mobileNav } from "../constants/nav";

const MobileNav = () => {
  return (
    <section className="lg:hidden h-14 bg-black  fixed bottom-0 w-full z-10">
      <div className="flex items-center justify-between h-full text-neutral-400 ">
        {mobileNav.map((nav, i) => {
          return (
            <NavLink key={nav.label +"mobileNav"} to={nav.href} className={({isActive}) => `px-3 flex h-full items-center flex-col justify-center ${isActive && "text-white"}`}>
              <div className="text-2xl">{nav.icon}</div>
              <p className="text-sm capitalize">{nav.label}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNav;
