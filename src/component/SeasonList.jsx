import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Accordion from "./Accordion";

const SeasonList = ({ data, title }) => {

  const params = useParams()
  const [seasonData, setSeasonData] = useState([])

  const fetchDetails = async (seasonNumber) => {
    try {
      const response = await axios.get(`tv/${params?.id}/season/${seasonNumber}`);
      // Assuming each episode has a unique identifier like `id`
      const newEpisodes = response.data.episodes;
      setSeasonData((prev) => {
        // Use a map to track uniqueness based on episode id
        const episodeIds = new Set(prev.map(ep => ep.id));
        const uniqueEpisodes = newEpisodes.filter(ep => !episodeIds.has(ep.id));
        return [...prev, ...uniqueEpisodes];
      });
    } catch (error) {
      console.error("Error fetching season details", error);
    }
  }; 

  useEffect(() => {

    if(!data) return

    const seasonNumber = data?.map((el) => {
      const numbers = el.match(/\d+/g)
      return numbers ? numbers.join("") : " " 
    })

    setSeasonData([])

    seasonNumber.map((el) => {
      fetchDetails(el)
    })
    

  }, [data,params.id])


  return (
    <>
      <div className="text-center bg-white mt-2 rounded-lg text-black">
        <h1 className=" text-2xl font-semibold underline">{title}</h1>
        {data?.map((seasonNo, i) => {
          return (
            <>
              <Accordion key={seasonNo + i} btnNums={seasonNo} episodes ={seasonData.filter((el) => el.season_number === Number(seasonNo.match(/\d+/g)))} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default SeasonList;
