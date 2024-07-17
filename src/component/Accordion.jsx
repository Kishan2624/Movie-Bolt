import React, { useState } from "react";
import { Link,useParams } from "react-router-dom";
const Accordion = ({ btnNums, episodes }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-around">
          <button onClick={handleAccordion} className="">
            {btnNums}
          </button>
          <span>{accordionOpen ? "-" : "+"}</span>
        </div>
        <div
          className={
            accordionOpen ? "h-auto overflow-hidden" : "h-0 overflow-hidden"
          }
        >
          {episodes?.map((el) => {
            return (
              <>
              <Link to={`${btnNums?.match(/\d+/g)}/${el.episode_number}`}>
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
