import React from "react";
import Slider from "react-slick";

const MainSlider = props => {
  const slides = [
    {
      img: "Images/Slide_one.png",
      lineOne: "Fitness Coaching",
      lineTwo: "Just got eaiser"
    },
    {
      img: "Images/Slide_two.jpg",
      lineOne: "Personal Trainer",
      lineTwo: "for better life"
    },

    {
      img: "Images/Slide_three.jpg",
      lineOne: "Get Fit",
      lineTwo: "Makes your goals achievable"
    }
  ];

  const settings = {
    infinite: true,
    autoplay: 1000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const generateSlides = () =>
    slides
      ? slides.map((item, i) => (
          <div key={i}>
            <div
              className="featured_image"
              style={{
                background: `url(${item.img})`,
                height: `${window.innerHeight}px`
              }}
            >
              <div className="featured_action">
                <div className="tag title">{item.lineOne}</div>
                <div className="tag low_title">{item.lineTwo}</div>
                <div />
              </div>
            </div>
          </div>
        ))
      : null;

  return (
    <div className="featured_container">
      <Slider {...settings}>{generateSlides()}</Slider>
    </div>
  );
};

export default MainSlider;
