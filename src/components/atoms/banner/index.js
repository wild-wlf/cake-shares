import React from "react";
import Image from "next/image";
import { BannerWrapper } from "./banner.style";
import banner from "../../../_assets/slider.png";
import banner2 from "../../../_assets/slider-2.png";
import Slider from "react-slick";

const Banner = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [],
  };
  return (
    <BannerWrapper image={banner}>
      <Slider {...settings}>
        <div>
          <Image src={banner} className="banner" alt="banner" />
          <Image src={banner2} className="banner2" alt="banner" />
        </div>
        <div>
          <Image src={banner} className="banner" alt="banner" />
          <Image src={banner2} className="banner2" alt="banner" />
        </div>
      </Slider>
    </BannerWrapper>
  );
};

export default Banner;
