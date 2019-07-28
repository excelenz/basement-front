import React from "react";

const Thumb = ({ image_url }) => {
  return (
    <div className="thumb-box">
      <img className="thumb" src={image_url} />
    </div>
  );
};
export default Thumb;
