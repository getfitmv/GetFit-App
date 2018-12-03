import React from "react";
import Slider from "react-slick";

const ReviewsCard = () => {
  const reviews = [
    {
      img: "Images/sample57.jpg",
      text:
        " My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I'll acceptany responsibility for my actions.",
      author: "Custom shop",
      role: "expert"
    },
    {
      img: "Images/sample57.jpg",
      text:
        " My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I'll acceptany responsibility for my actions.",
      author: "Custom shop",
      role: "expert"
    },
    {
      img: "Images/sample57.jpg",
      text:
        " My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I'll acceptany responsibility for my actions.",
      author: "Custom shop",
      role: "expert"
    },

    {
      img: "Images/sample57.jpg",
      text:
        " My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I'll acceptany responsibility for my actions.",
      author: "Custom shop",
      role: "expert"
    }
  ];

  const settings = {
    infinite: false,
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    draggable: false
  };

  const generateReviews = () =>
    reviews
      ? reviews.map((review, i) => (
          <div key={i}>
            <figure className="snip1157">
              <blockquote>
                {review.text}
                <div className="arrow" />
              </blockquote>
              <img style={{ background: `url(${review.img})` }} />
              <div className="author">
                <h5>
                  {review.author}
                  <span> {review.role}</span>
                </h5>
              </div>
            </figure>
          </div>
        ))
      : null;

  return (
    <div className="review-parent">
      <Slider {...settings}>{generateReviews()}</Slider>
    </div>
  );
};

export default ReviewsCard;
