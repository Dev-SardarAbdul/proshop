import React from "react";
import ReactStars from "react-rating-stars-component";

function Rating({ rating }) {
  const starsData = {
    size: 30,
    count: 5,
    value: rating,
    isHalf: true,
    edit: false,
  };
  return (
    <div className="d-flex  align-items-center gap-3">
      <ReactStars {...starsData} />
      <p style={{ margin: 0 }}> {rating} Reviews</p>
    </div>
  );
}

export default Rating;
