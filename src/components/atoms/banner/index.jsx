import React from "react";
import Image from "next/image";
import { BannerWrapper, SlideWrapp } from "./banner.style";
import banner1desk from "../../../_assets/slide1desk.png";
import banner2desk from "../../../_assets/slide2desk.png";
import banner3desk from "../../../_assets/slide3desk.png";
import banner1resp from "../../../_assets/slide1resp.png";
import banner2resp from "../../../_assets/slide2resp.png";
import banner3resp from "../../../_assets/slide3resp.png";
import Slider from "react-slick";

const Banner = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [],
  };

  return (
    <BannerWrapper>
      <Slider {...settings}>
        <SlideWrapp $bg={banner1desk}>
          {/* <Image src={banner1desk} className="banner" alt="banner" /> */}
          <Image src={banner1resp} className="banner2" alt="banner" />
        </SlideWrapp>
        <div>
          <Image src={banner2desk} className="banner" alt="banner" />
          <Image src={banner2resp} className="banner2" alt="banner" />
        </div>
        <div>
          <Image src={banner3desk} className="banner" alt="banner" />
          <Image src={banner3resp} className="banner2" alt="banner" />
        </div>
      </Slider>
    </BannerWrapper>
  );
};

export default Banner;
