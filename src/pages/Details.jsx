import React from "react";
import { useParams} from "react-router-dom";
import useFetchDetails from "../Hooks/useFetchDetails";
import { useSelector } from "react-redux";

const Explore = () => {
  const params = useParams();
  const imageURL = useSelector((state) => state.movieoData.imageURL);

  const { data: details } = useFetchDetails(`${params.explore}/${params.id}`);

  if (!details) {
    return <div className="flex w-[100vw] h-[100vh] justify-center items-center text-4xl text-red-600">Loading...</div>;
  }

  console.log(details)

  return (
    <div className="py-20 mx-4">
      <div className="cotainer ">
        <img src={`${imageURL}${details.poster_path}`} alt={`${details?.title||details?.name}`} className={"w-[200px] object-cover rounded"}/>
      </div>
    </div>
  );
};

export default Explore;
