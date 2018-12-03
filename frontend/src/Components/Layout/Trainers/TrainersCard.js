import React from "react";

const TrainersCard = () => {
  const trainers = [
    {
      img: "Images/sample57.jpg",
      name: "Mohd Juma",
      description: "he is one of the most "
    },
    {
      img: "Images/sample57.jpg",
      name: "Mohd Juma",
      description: "he is one of the most "
    },
    {
      img: "Images/sample57.jpg",
      name: "Mohd Juma",
      description: "he is one of the most "
    }
  ];

  const generateTrainers = () =>
    trainers
      ? trainers.map((trainer, i) => (
          <div key={i}>
            <figure className="snip0058">
              <img src={trainer.img} alt="sample57" />
              <figcaption>
                <p>
                  <span>{trainer.description}</span>
                </p>
                <h2 className="white">{trainer.name}</h2>
              </figcaption>
            </figure>
          </div>
        ))
      : null;

  return (
    <div className="review-parent">
      <div className="Trainer-wrapper"> {generateTrainers()}</div>
    </div>
  );
};

export default TrainersCard;
