import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

const ApiVideoPlayer = ({data,close,media_type}) => {
  return (
    <section className="fixed bg-neutral-700 top-0 bottom-0 left-0 z-40 bg-opacity-60 w-full flex justify-center items-center">
    <div className="bg-black w-full max-h-[80vh] max-w-[90%]  lg:max-w-screen-lg aspect-video rounded relative">
      <button className="absolute -right-1 -top-8 text-4xl " onClick={close}><IoCloseSharp /></button>
      <iframe src={`https://vidsrc.to/embed/${media_type}/${data.id}`} className={"w-full h-full rounded"} frameborder="0" allowFullScreen />
    </div>

  </section>
  )
}

export default ApiVideoPlayer