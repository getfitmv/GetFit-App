import React from "react";

const TrainersCards = () => {
  const reviews = [
    {
      img: "Images/Slide_one.jpg",
      trainer:
        " My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I'll acceptany responsibility for my actions.",
      description: "Custom shop"
    }
  ];

  return (
    <div className="review-parent">
      <div className="Trainer-wrapper">
        <figure className="snip0058">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample57.jpg"
            alt="sample57"
          />
          <figcaption>
            <p>
              <span>
                Weekends don't count unless you spend them doing something
                completely pointless.
              </span>
            </p>
            <h2 className="white">
              Patsy <span>Stone</span>
            </h2>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default TrainersCards;
