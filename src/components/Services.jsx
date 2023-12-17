import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        interval={1000}>
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Web Development</p>
        </div>
        <div>
          <img src={img2} alt="Item2" />
          <p className="legend">Machine Learning</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
