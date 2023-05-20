import React, { useState } from "react";
import FomrInput from "./FomrInput";

const Form = () => {
  const [values, setValues] = useState({
    holdername: "",
    cardnumber: "",
    expdatemonth: "",
    expdateyear: "",
    cvc: "",
  });

  const inputs = [
    {
      id: 1,
      name: "holdername",
      type: "text",
      placeholder: "Username",
      label: "Cardholder Name",
      required: true,
      width: "100%",
    },
    {
      id: 2,
      name: "cardnumber",
      type: "text",
      placeholder: "Email",
      errorMessage: "wrong format , numbers only",
      label: "Card Number",
      required: true,
      width: "100%",
    },
    {
      id: 3,
      name: "expdatemonth",
      type: "text",
      placeholder: "Exp. Date",
      errorMessage: "Can't be blank",
      label: "Exp.Date",
      required: true,
      width: "50px",
    },
    {
      id: 4,
      name: "expdateyear",
      type: "text",
      placeholder: "(MM/YY)",
      errorMessage: "Can't be blank",
      label: "(MM/YY)",
      required: true,
      width: "50px",
    },
    {
      id: 5,
      name: "cvc",
      type: "text",
      placeholder: "CVC",
      errorMessage: "Can't be blank",
      label: "CVC",
      required: true,
      width: "100px",
    },
  ];

  const handleSumbit = (e) => {
    e.prevernDefault();
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const partoneForm = inputs.slice(0, 2);
  const parttowForm = inputs.slice(2, 5);
  return (
    <form className="form" onSubmit={handleSumbit}>
      {partoneForm.map((input) => {
        return (
          <FomrInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        );
      })}
      <div className="flex-inputs">
        {parttowForm.map((input) => {
          return (
            <FomrInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          );
        })}
      </div>
      <button>Confirm</button>
    </form>
  );
};

export default Form;
