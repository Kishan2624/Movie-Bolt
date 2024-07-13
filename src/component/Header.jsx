import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from "../constants/nav";
import MobileSearch from "./MobileSearch";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    } else {
      navigate("/search?q="); // Or any other default route you want to navigate to when searchInput is empty
    }
  }, [searchInput, navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  const mobileSearch = useRef(null);

  const handleSearch = () => {
    if(mobileSearch.current){
      mobileSearch.current.classList.toggle('hidden')
    }
  }

  return (
    <>
      <header className="fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40">
        <div className="container mx-auto px-4 flex items-center h-full">
          <Link to={"/"}>
            <img src="logo.png" alt="logo" width={120} />
          </Link>

          <nav className=" hidden lg:flex items-center gap-1 ml-5">
            {navigation.map((nav, i) => {
              return (
                <div key={i}>
                  <NavLink
                    key={nav.label}
                    to={nav.href}
                    className={({ isActive }) =>
                      `px-2 hover:text-neutral-100 ${
                        isActive && "text-neutral-100"
                      }`
                    }
                  >
                    {nav.label}
                  </NavLink>
                </div>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-5">
            <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search Here..."
                className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
              />
              <button className="text-2xl text-white  " onClick={handleSearch}>
                <IoSearchOutline />
              </button>
            </form>

            <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-150 transition-all">
              <img src="user.png" alt="user icon" />
            </div>
          </div>
        </div>

        <div ref={mobileSearch} className={"lg:hidden"} >
        <MobileSearch/>
          </div>    
        
      </header>
    </>
  );
};

export default Header;
