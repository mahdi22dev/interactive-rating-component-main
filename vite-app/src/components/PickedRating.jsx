import { RatingData } from "../RatingData";
import React, { useEffect, useState } from "react";
import { bringindex } from "../func";
const PickedRating = () => {
  let indexrt = 0;
  const [myRating, SetMyRating] = useState(false);
  const items = document.querySelectorAll(".btn");
  const rated = () => {
    items.forEach((item, index) => {
      item.addEventListener("click", () => {
        indexrt = index;
        for (let i = 0; i < items.length; i++) {
          items[i].classList.remove("active");
          item.classList.add("active");
          bringindex(indexrt);
        }
      });
    });
  };
  rated();

  useEffect(() => {
    SetMyRating(!myRating);
  }, []);

  return (
    <>
      <ul className="items">
        {RatingData.map((therating) => {
          const { id, ratingN } = therating;
          return (
            <li key={id} className="item ">
              <button className="btn">{ratingN}</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PickedRating;
