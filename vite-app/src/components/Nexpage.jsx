import React from "react";
import image from "../images/illustration-thank-you.svg";
import { newkey } from "../func";

const Nexpage = () => {
  return (
    <div className="nextpage">
      <img src={image} alt="" />
      <div className="chosed-rating">{newkey()}</div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Nexpage;
