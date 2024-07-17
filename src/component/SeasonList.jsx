import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Accordion from "./Accordion";

const SeasonList = ({ data, title }) => {



  const params = useParams()
  const [seasonData, setSeasonData] = useState([])

  const fetchDetails = async(seasonNumber) => {
    const response = await axios.get(`tv/${params?.id}/season/${seasonNumber}`)
    setSeasonData((prev) => {
      return [...prev,...response.data.episodes]})
  }

  console.log(data)

 

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

  console.log(seasonData)


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
