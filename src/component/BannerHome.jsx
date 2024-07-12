import React from "react";
import { useSelector } from "react-redux";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { useState, useEffect } from "react";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieoData.bannerData);
  const imageURl = useSelector((state) => state.movieoData.imageURL);

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    if (currentImage < bannerData.length - 1) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {

      setCurrentImage((prev) => {
        if(prev < bannerData.length - 1 ){
          return prev+1
        }else{
          setCurrentImage(0)
        }
      })
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [bannerData, imageURl]);

  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((data, i) => {
          return (
            <div
              key={i}
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all"
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <div className="w-full h-full">
                <img
                  src={imageURl + data.backdrop_path}
                  className="w-full h-full object-cover"
                />
              </div>

              {/** previous and next buttons */}
              <div className="absolute top-0 w-full h-full hidden items-center justify-between px-4 group-hover:lg:flex">
                <button
                  onClick={handlePrevious}
                  className="text-4xl text-white bg-gradient-to-l from-red-700 to-orange-500 rounded-full z-10 transition-all hover:scale-110"
                >
                  <IoIosArrowDropleft />
                </button>
                <button
                  onClick={handleNext}
                  className="text-4xl text-white bg-gradient-to-l from-red-700 to-orange-500 rounded-full z-10 transition-all hover:scale-110"
                >
                  <IoIosArrowDropright />
                </button>
              </div>

              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>

              <div className="container mx-auto">
                <div className="container mx-auto absolute bottom-0 max-w-md px-4">
                  <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-3xl">
                    {data?.title || data?.name}
                  </h2>
                  <p className="text-ellipsis line-clamp-3 my-2">
                    {data.overview}
                  </p>
                  <div className="flex items-center gap-4 ">
                    <p>Rating : {Number(data.vote_average).toFixed(1)}+</p>
                    <span>|</span>
                    <p>View : {Number(data.popularity).toFixed(2)}</p>
                  </div>
                  <button className="bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105 hover:text-white">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;
