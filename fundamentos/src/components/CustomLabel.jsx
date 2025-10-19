// importando componente
import React from "react";

const CustomLabel = ({ text, title }) => {
  return (
    <div className="macro">
      <p>{title}</p>
      <label>{text}</label>
    </div>
  );
};

export default CustomLabel;
