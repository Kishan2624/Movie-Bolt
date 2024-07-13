import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Card from "../component/Card";

const Search = () => {
  const params = useParams();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [pageNO, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);

  // Remove %20 and update the query state
  useEffect(() => {
    const removeSpace = location.search.slice(3).replace(/%20/g, " ");
    setQuery(removeSpace);
    setPageNo(1)
  }, [location.search]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/search/multi", {
        params: {
          query: query,
          page: pageNO,
        },
      });

      setData((prev) => [...prev, ...response.data.results]);
      setTotalPageNo(response.data.total_pages);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNO]);

  useEffect(() => {
    setPageNo(1)
    setData([])
    fetchData();
  }, [query]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <div className="lg:py-16 pt-24">
        <div className="container mx-auto">
          <h3 className="capitalize font-light lg:text-2xl text-xl my-3 px-3">
            {`Search Results: ${query} `}
          </h3>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center">
          {data.map((searchData, i) => (
            <Card data={searchData} key={searchData.id + "exploreSection"} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
