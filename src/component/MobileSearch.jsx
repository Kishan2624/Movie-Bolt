import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MobileSearch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput, navigate]);

  return (
    <div className="container flex justify-center">
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          type="text"
          placeholder="Search Here..."
          className="w-full h-8 rounded mx-1 px-2 text-black"
        />
      </form>
    </div>
  );
};

export default MobileSearch;
