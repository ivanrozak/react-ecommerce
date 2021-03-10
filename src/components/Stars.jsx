import React from "react";

const Star = () => {
  return (
    <div className="stars" data-stars="5">
      <svg className="star rating" data-rating="1">
        <polygon
          fill="#FFC200"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
      <svg className="star rating" data-rating="2">
        <polygon
          fill="#FFC200"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
      <svg className="star rating" data-rating="3">
        <polygon
          fill="#FFC200"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
      <svg className="star rating" data-rating="4">
        <polygon
          fill="#FFC200"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
      <svg className="star rating" data-rating="5">
        <polygon
          fill="#FFC200"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
    </div>
  );
};

export default Star;
