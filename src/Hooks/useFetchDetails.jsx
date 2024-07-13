import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useFetchDetails = ({endpoint,query}) => {
  const params = useParams();
  const [query,setQuery] = useState('')
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios(endpoint, {
        params: {
          query: query,
          page: pageNo,
        },
      });

      setData((prev) => {
        return [...prev, ...response.data.results];
      });

      setTotalPageNo(response.data.results.total_pages);
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
    setQuery("");
    setPageNo(1);
    setData([]);
    fetchData();
  }, [query]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return {data,pageNo,}
};

export default useFetchDetails;
