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
import arrowRight from "../../../_assets/arrow.png";

const Banner = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    fade: true,
    responsive: [],
  };

  return (
    <BannerWrapper>
      <Slider {...settings}>
        <SlideWrapp $bg={banner1desk}>
          <div className="textWrapp">
            <strong>Turkish Government, House Bonds!</strong>
            <button className="btn">Buy Now</button>
          </div>
          {/* <Image src={banner1resp} className="banner2" alt="banner" /> */}
        </SlideWrapp>
        <SlideWrapp $bg={banner2desk}>
          <div className="textWrapp">
            <strong>Find Best Apartments to make an Investment!</strong>
            <button className="btn">Buy Now</button>
          </div>
          {/* <Image src={banner2resp} className="banner2" alt="banner" /> */}
        </SlideWrapp>
        <SlideWrapp $bg={banner3desk}>
          <div className="textWrapp">
            <strong>Ferrari Car Shares Investment Scheme!</strong>
            <button className="btn">Buy Now</button>
          </div>
          {/* <Image src={banner3resp} className="banner2" alt="banner" /> */}
        </SlideWrapp>
      </Slider>
    </BannerWrapper>
  );
};

export default Banner;
