import React from "react";
import "./Reviews.css";

import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

const Reviews = () => {
  return (
    <div className="reviews_page">
      <h3>What our customers have to say!</h3>
      <div className="reviews">
        <div className="review_card">
          <section className="reviewer_profile">
            <img src="https://bit.ly/2FaT8hT" alt="reviewer" />
            <p>Rita clarke</p>
          </section>
          <p>I love shopit minimalistic design and easy shopping mechanism.</p>
          <FormatQuoteIcon />
        </div>

        <div className="review_card">
          <section className="reviewer_profile">
            <img src="https://bit.ly/3jJ2Ib1" alt="reviewer" />
            <p>Sarah Watkins</p>
          </section>
          <p>Shopit is my best destination for online shopping.</p>
          <FormatQuoteIcon />
        </div>

        <div className="review_card">
          <section className="reviewer_profile">
            <img src="https://bit.ly/2GS36Ff" alt="reviewer" />
            <p>Jane Doe</p>
          </section>
          <p>
            I can't describe how good shopit is,simply use it and experience.
          </p>
          <FormatQuoteIcon />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
