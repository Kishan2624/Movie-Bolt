import React, { useRef } from "react";
import Card from "../component/Card";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";

const HorizontalCardScroll = ({ data = [], heading , trending,media_type}) => {
  const containerRef = useRef();

  const handleNext = () => {
    containerRef.current.scrollLeft += 300;
  };

  const handlePrevious = () => {
    containerRef.current.scrollLeft -= 300;
  };

  return (
    <div className="container mx-auto px-3 my-10 ">
      <h2 className="text-xl font-bold lg:text-2xl mb-3 text-white capitalize">
        {heading}
      </h2>
      <div className=" relative ">
        <div
          ref={containerRef}
          className=" grid grid-cols-[repeat(auto-fit,230px)] gap-6 grid-flow-col overflow-x-scroll relative z-10 scroll-smooth transition-all scrollbar-hide"
        >
          {data.map((data, i) => {
            return (
              <Card
                key={data.id + " heading " + { heading }}
                data={data}
                index={i + 1}
                trending={trending}
                media_type={media_type}

              />
            );
          })}
        </div>

        <div className="absolute top-0 hidden lg:flex justify-between w-full h-full items-center ">
          <button
            onClick={handlePrevious}
            className="absolute bottom-[153px] -left-3 text-3xl bg-white text-black rounded-full  z-20"
          >
            <MdOutlineArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute bottom-[153px] right-2 text-3xl bg-white text-black rounded-full -me-3 z-20"
          >
            <MdOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCardScroll;
