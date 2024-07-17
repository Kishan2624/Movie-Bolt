import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const VideoPlay = ({ close,videoData}) => {
  return (
    <section className="fixed bg-neutral-700 top-0 bottom-0 left-0 z-40 bg-opacity-60 w-full flex justify-center items-center">
      <div className="bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded relative">
        <button className="absolute -right-1 -top-8 text-4xl " onClick={close}><IoCloseSharp /></button>
        <iframe src={`${videoData}`} className={"w-full h-full rounded"} allowFullScreen frameborder="0"/>
      </div>

    </section>
  );
};

export default VideoPlay;
