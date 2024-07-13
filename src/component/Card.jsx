import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

const Card = ({ data, trending, index, media_type }) => {
  const imageURL = useSelector((state) => state.movieoData.imageURL);
  const mediaType = data?.media_type ?? media_type;
  return (
    <Link
      to={"/" + mediaType + "/" + data.id}
      className="w-full min-w-[230px] max-w-[230px] rounded h-80 block overflow-hidden relative hover:scale-110 transition-all"
    >
      {data.poster_path ? (
        <img src={imageURL + data.poster_path} alt="" />
      ) : (
        <div className="flex justify-center items-center w-full h-full border-2 border-solid border-black">
          <p className="text-white text-lg">Image Not Found</p>
        </div>
      )}

      <div className="absolute top-4 bg-black/60 rounded-r-full backdrop-blur-3xl overflow-hidden">
        {trending && <div className="py-1 px-4">#{index} Trending</div>}
      </div>

      <div className="absolute w-full bottom-0 h-16 backdrop-blur-3xl bg-black/60 py-2 px-2">
        <h2 className="text-ellipsis line-clamp-1 text-lg font-light">
          {data?.title || data?.name}
        </h2>
        <div className="text-sm text-neutral-400 flex justify-between items-center">
          <p>{moment(data.release_date).format("MMMM Do YYYY")}</p>
          <p className="bg-black px-2 py-1 rounded-full text-xs text-white">
            Rating : {Number(data.vote_average).toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
