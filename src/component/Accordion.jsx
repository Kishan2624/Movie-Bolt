import React, { useState } from "react";
import { Link,useParams } from "react-router-dom";
const Accordion = ({ btnNums, episodes }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <>
      <div onClick={handleAccordion} className="flex flex-col rounded-sm mx-auto gap-5 cursor-pointer w-[90%] ">
        <div className="flex justify-around items-center shadow-lg font-bold">
          <button  className="py-2">
            {btnNums}
          </button>
          <span>{accordionOpen ? "-" : "+"}</span>
        </div>
        <div
          className={
            `bg-gray-100 flex gap-2 shadow-lg flex-col  rounded-md ${accordionOpen ? "h-auto overflow-hidden" : "h-0 overflow-hidden"}`
          }

        >
          {episodes?.map((el) => {
            return (
              <>
              <Link className="shadow-lg mb-2 font-semibold" to={`${btnNums?.match(/\d+/g)}/${el.episode_number}`}>
                <p>{el.episode_number}</p>
              
              </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Accordion;
