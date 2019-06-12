import React from "react";
import icon from "../../assets/icon.png";
import "./lodingspinner.css";

export default () => {
  return (
    <>
      <p>Loding ...</p>
      <img className="loding" alt="icon" src={icon} />
    </>
  );
};
