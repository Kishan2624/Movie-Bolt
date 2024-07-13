import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../component/Card"

const Explore = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios(`/discover/${params.explore}`, {
        params: {
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

  if (!data) {
    return (
      <div className="flex w-[100vw] h-[100vh] justify-center items-center text-4xl text-red-600">
        Loading...
      </div>
    );
  }

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1)
    setData([])
    fetchData();
  }, [params.explore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
 

  return (
    <div className="py-16">
      <div className="container mx-auto ">
        <h3 className="capitalize font-light lg:text-2xl text-xl my-3 px-3">
          {params.explore}
        </h3>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center">
        {data.map((exploreData,i) => {
          return (
            <Card data={exploreData} key={exploreData.id+"exploreSection"} media_type={params.explore}/>
          )
        })}
      </div>
    </div>
  );
};

export default Explore;
