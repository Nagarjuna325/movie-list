import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const RatingStars = ({ rating }) => {
  const adjustedRating = Math.min(Math.max(rating, 0), 10);
  const fullStars = Math.floor(adjustedRating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 10 - fullStars - halfStar;



  return (
    <div className="rating-stars">
      {[...Array(fullStars)].map((_, index) => (
        <AiFillStar key={index} />
      ))}
      {halfStar === 1 && (
        <span className="half-star">
          <AiFillStar style={{ width: '50%', position: 'absolute', overflow: 'hidden' }} />
          <AiOutlineStar style={{ marginLeft: '50%' }} />
        </span>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <AiOutlineStar key={index + fullStars + halfStar} />
      ))}
    </div>
  );
};

export default RatingStars;
