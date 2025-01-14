import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useFetchDetails from "../Hooks/useFetchDetails";
import { useState } from "react";
import Divider from "../component/Divider";
import moment from "moment";
import HorizontalCardScroll from "../component/HorizontalCardScroll";
import VideoPlay from "../component/VideoPlay";

const SeasonDetails = () => {
  const params = useParams();
  const imageURL = useSelector((state) => state.movieoData.imageURL);

  const { data: videoData } = useFetchDetails(
    `${params.explore}/${params.id}/season/${params.season}/episode/${params.episode}/videos`
  );

  console.log(videoData?.results[0]?.key);

  const { data: imageDetails } = useFetchDetails(
    `${params.explore}/${params.id}/season/${params.season}/episode/${params.episode}/images `
  );

  const { data: details } = useFetchDetails(
    `${params.explore}/${params.id}/season/${params.season}/episode/${params.episode}`
  );

  const { data: castDetails } = useFetchDetails(
    `${params.explore}/${params.id}/season/${params.season}/episode/${params.episode}/credits`
  );

  const { data: similarData } = useFetchDetails(
    `${params?.explore}/${params?.id}/similar`
  );
  const { data: recommendationData } = useFetchDetails(
    `${params?.explore}/${params?.id}/recommendations`
  );

  const [playVideo, setVideoPlay] = useState(false);
  const [apiPlayVideo, setApiVideoPlay] = useState(false);


  const handlePlayVideo = () => {
    setVideoPlay(true);
  };

  const handleApiPlayVideo = () => {
    setApiVideoPlay(true);
  };


  const duration = (Number(details?.runtime) / 60).toFixed(1).split(".");
  const writer = castDetails?.crew
    ?.filter((el) => el?.job === "Writer")
    ?.map((el) => el?.name)
    ?.join(", ");

  return (
    <div className="w-full h-full  ">
      <div className="relative w-full ">
        <div className="w-full h-[280px] hidden lg:block">
          <img
            src={`${imageURL}/${imageDetails?.stills[0].file_path}`}
            alt={`${details?.title || details?.name}`}
            className={"object-cover w-full h-full "}
          />
        </div>

        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
      </div>

      <div className="w-full mx-atuo px-3 py-20 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10 rounded">
        <div className=" mt-4 mx-auto lg:mx-0 w-fit  ">
          <img
            src={`${imageURL}/${imageDetails?.stills[0].file_path}`}
            alt={`${details?.title || details?.name}`}
            className={"w-60 object-contain  rounded "}
          />

          <button
            onClick={() => handlePlayVideo()}
            className=" captilize mt-1 bg-white text-black font-bold text-lg hover:bg-gradient-to-t from-red-500 to-orange-500 hover:scale-105 hover:text-white transition-all rounded w-full py-2 px- 4"
          >
            Play Trailer
          </button>
          <button
            onClick={() => handleApiPlayVideo()}
            className=" captilize mt-1 bg-white text-black font-bold text-lg hover:bg-gradient-to-t from-red-500 to-orange-500 hover:scale-105 hover:text-white transition-all rounded w-full py-2 px- 4"
          >
            Play {params.explore}
          </button>
        </div>

        <div className="w-full">
          <h2 className="text-3xl font-bold text-white lg:pt-4">
            {details?.title || details?.name}
          </h2>
          <p className="text-neutral-400">{details?.tagline}</p>

          <Divider />

          <div className="flex items-center gap-3 my-3">
            <p>Rating : {Number(details?.vote_average).toFixed(1)}</p>
            <span>|</span>
            <p>View : {Number(details?.vote_count)}</p>
            <span>|</span>
            <p>
              Duration :{" "}
              {duration == "NaN"
                ? "Not Found"
                : `${duration[0]}h ${duration[1]}m`}
            </p>
          </div>
          <Divider />

          <div>
            <h3 className="font-bold text-white mb-1 text-xl">Overview</h3>
            <p>{details?.overview}</p>
            <Divider />

            <div className="flex items-center gap-3 texte-center">
              <p>
                <span className="text-white">Release Date</span> :{" "}
                {moment(details?.release_date).format("MMMM Do YYYY")}
              </p>
            </div>
            <Divider />
          </div>

          <div>
            <p>
              <span className="text-white">Director</span> :{" "}
              {castDetails?.crew[0]?.name
                ? castDetails?.crew[0]?.name
                : "Not Found"}
            </p>
            <Divider />
            <p>
              <span className="text-white">Writer</span> :{" "}
              {writer ? writer : "Not Found"}
            </p>
          </div>

          <Divider />

          <div>
            <h2 className="font-bold text-lg">Cast :</h2>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5 justify-center">
            {castDetails?.cast
              ?.filter((el) => el?.profile_path)
              .map((cast, index) => {
                return (
                  <div>
                    <div>
                      <img
                        className="w-24 h-24 rounded-full object-cover"
                        src={imageURL + cast?.profile_path}
                      />
                      <p className="font-bold text-center text-sm text-neutral-400 py-2">
                        {cast?.name}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div>
        <HorizontalCardScroll
          data={similarData?.results}
          heading={"Similar " + params?.explore}
          media_type={params?.explore}
        />
        <HorizontalCardScroll
          data={recommendationData?.results}
          heading={"Recommendation " + params?.explore}
          media_type={params?.explore}
        />
      </div>

      {playVideo && (
        <VideoPlay
          close={() => setVideoPlay(false)}
          videoData={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`}
        />
      )}

      {apiPlayVideo && (
        <VideoPlay
          close={() => setApiVideoPlay(false)}
          videoData={`https://vidsrc.to/embed/${params.explore}/${params.id}/${params.season}/${params.episode}`}
        />
      )}
    </div>
  );
};

export default SeasonDetails;
