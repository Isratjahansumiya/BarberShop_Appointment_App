import React from 'react';
import people1 from "../../pics/people1.png";
import people2 from "../../pics/people2.png";
import people3 from "../../pics/people3.png";
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const allReviews = [
      {
        _id: 1,
        name: "Jhon T",
        review:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatibus laboriosam fugiat eaque quasi unde quas excepturi, praesentium error dolor officiis, quibusdam dicta impedit consectetur non nemo reiciendis itaque aspernatur id ipsum ipsam repellat earum minima. Reiciendis nulla eos voluptatum!",
        img: people1,
        location: "Finland",
      },
      {
        _id: 2,
        name: "Johanna J",
        review:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatibus laboriosam fugiat eaque quasi unde quas excepturi, praesentium error dolor officiis, quibusdam dicta impedit consectetur non nemo reiciendis itaque aspernatur id ipsum ipsam repellat earum minima. Reiciendis nulla eos voluptatum!",
        img: people2,
        location: "Finland",
      },
      {
        _id: 3,
        name: "Tanna P",
        review:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatibus laboriosam fugiat eaque quasi unde quas excepturi, praesentium error dolor officiis, quibusdam dicta impedit consectetur non nemo reiciendis itaque aspernatur id ipsum ipsam repellat earum minima. Reiciendis nulla eos voluptatum!",
        img: people3,
        location: "Finland",
      },
    ];
    return (
      <section className="my-28">
        <div>
          <h4 className="text-xl text-secondary font-bold">Reviews</h4>
          <h2 className="text-3xl">What our customers say?</h2>
        </div>
        <div className="my-20 grid grid-cols-1 lg:grid-cols-3 gap-5 ">
          {allReviews.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
        </div>
      </section>
    );
};

export default Reviews;