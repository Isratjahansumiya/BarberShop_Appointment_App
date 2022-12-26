import React from 'react';

const ReviewCard = ({review}) => {
    return (
      <div>
        <div className="card lg:w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <p>{review.review}</p>
          </div>
          <div className="flex items-center my-10 mx-10">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 mr-5">
                <img src={review.img} alt="" />
              </div>
            </div>
            <div>
              <h4 className="text-xl">{review.name}</h4>
              <p>{review.location}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ReviewCard;