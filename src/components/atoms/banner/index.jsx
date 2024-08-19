import React from 'react';
import Image from 'next/image';
import { BannerWrapper, SlideWrapp } from './banner.style';
import banner1desk from '../../../_assets/slide1desk.png';
import banner2desk from '../../../_assets/slide2desk.png';
import banner3desk from '../../../_assets/slide3desk.png';
import banner1resp from '../../../_assets/slide1resp.png';
import banner2resp from '../../../_assets/slide2resp.png';
import banner3resp from '../../../_assets/slide3resp.png';
import Slider from 'react-slick';

const Banner = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          fade: true,
        },
      },
    ],
  };

  return (
    <BannerWrapper>
      <Slider {...settings}>
        <SlideWrapp $bg={banner1desk} $resp={banner1resp}>
          <div className="textWrapp">
            <strong>Turkish Government, House Bonds!</strong>
            <button className="btn">Buy Now</button>
          </div>
          {/* <Image src={banner1resp} className="banner2" alt="banner" /> */}
        </SlideWrapp>
        <SlideWrapp $bg={banner2desk} $resp={banner2resp}>
          <div className="textWrapp">
            <strong>Find Best Apartments to make an Investment!</strong>
            <button className="btn">Buy Now</button>
          </div>
          {/* <Image src={banner2resp} className="banner2" alt="banner" /> */}
        </SlideWrapp>
        <SlideWrapp $bg={banner3desk} $resp={banner3resp}>
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
