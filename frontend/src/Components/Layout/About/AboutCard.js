import React from "react";
import Zoom from "react-reveal/Zoom";

const AboutCard = props => {
  const images = [
    {
      img: "Images/vision_icon.png",
      title: "Our Vision",
      description:
        " Interactively incentivize value-added opportunities before standardized relationships"
    },

    {
      img: "Images/mission-icon.png",
      title: "Our Mission",
      description:
        " Interactively incentivize value-added opportunities before standardized relationships"
    }
  ];
  const generateAboutCard = () =>
    images
      ? images.map((card, i) => (
          <div key={i}>
            <Zoom duration={500}>
              <div className="vn_item">
                <div className="vn_outer">
                  <div className="vn_inner">
                    <div className="vn_icon_square bck_red" />
                    <div
                      className="vn_icon"
                      style={{
                        background: `url(${card.img})`
                      }}
                    />
                    <div className="vn_title">{card.title}</div>
                    <div className="vn_desc">{card.description}</div>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
        ))
      : null;

  return (
    <div className="center_wrapper">
      <div className="vn_wrapper">{generateAboutCard()}</div>
    </div>
  );
};

export default AboutCard;
