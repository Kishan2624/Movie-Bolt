import React, { useState } from "react";
import { Link } from "react-router-dom";
const Accordion = ({ btnNums, episodes }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const handleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <>
      <div className="flex flex-col bg-slate-200">
        <div className="flex justify-around">
          <button onClick={handleAccordion} className="">
            {btnNums}
          </button>
          <span>+</span>
        </div>
        <div>
          {episodes?.map((el) => {
            return(
              <>
              <p>{el.episode_number}</p>
              </>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Accordion;
