import React, { useState } from "react";
import icon from "../images/icon-star.svg";
import PickedRating from "./PickedRating";
import { useNavigate } from "react-router-dom";
const Rating = () => {
  const navigate = useNavigate();
  function handleSubmit() {
    navigate("/thankyou");
  }

  return (
    <div className="main">
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <div className="main-text">
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      <PickedRating />
      <button className="Sumbit_btn" onClick={handleSubmit}>
        SUMBIT
      </button>
    </div>
  );
};

export default Rating;
