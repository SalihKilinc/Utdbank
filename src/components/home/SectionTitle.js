import React from "react";

const SectionTitle = (props) => {
  return (
    <div className="section-title">
      <h2>{props.konu}</h2>
      <p>{props.bilgi}</p>
    </div>
  );
};

export default SectionTitle;
