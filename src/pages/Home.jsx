import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BannerHome from "../component/BannerHome";
import HorizontalCardScroll from "../component/HorizontalCardScroll";
import useFetch from "../Hooks/useFetch";

const Home = () => {
  const trendingData = useSelector((state) => state.movieoData.bannerData);
  const { data: nowPlayingData, loading: loading1 } =
    useFetch("/movie/now_playing");
  const { data: topRatedData, loading: loading2 } =
    useFetch("/movie/top_rated");
  const { data: poplularTvShowData, loading: loading3 } =
    useFetch("/tv/popular");


  if (loading1 && loading2 && loading3) {
    return (
      <div className="flex w-[90vw] h-[90vh] justify-center items-center text-4xl text-red-600">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <BannerHome />
      <HorizontalCardScroll
        data={trendingData}
        heading="Trending"
        trending={true}
        media_type={trendingData?.media_type}
      />
      <HorizontalCardScroll
        data={nowPlayingData}
        heading="Now Playing Movies"
        trending={false}
        media_type={"movie"}
      />
      <HorizontalCardScroll
        data={topRatedData}
        heading="Top Rated Movies"
        trending={false}
        media_type={"movie"}
      />
      <HorizontalCardScroll
        data={poplularTvShowData}
        heading="Popular Tv Shows"
        trending={false}
        media_type={"tv"}
      />
    </div>
  );
};

export default Home;
