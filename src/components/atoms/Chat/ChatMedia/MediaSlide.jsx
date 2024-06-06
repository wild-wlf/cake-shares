import React from 'react';
import { StyledMediaSlide } from './ChatMedia.styles';
import Slider from 'react-slick';
import property from '../../../../_assets/property.png';
import Image from 'next/image';

const MediaSlide = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
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
    <StyledMediaSlide>
      <label className="slideTitle">Photos & Multimedia</label>
      <Slider {...settings}>
        <div className="col-wrapper">
          <div className="col">
            <Image src={property} alt="property" />
          </div>
          <div className="col">hama</div>
          <div className="col">hama</div>
          <div className="col">hama</div>
          <div className="col">hama</div>
          <div className="col">hama</div>
        </div>
        <div className="col-wrapper">
          <div className="col">hama</div>
          <div className="col">hama</div>
          <div className="col">hama</div>
          <div className="col">hama</div>
          <div className="col">hama</div>
          <div className="col">hama</div>
        </div>
        <div className="col-wrapper">
          <div className="col">hama</div>
          <div className="col">hama</div>
          <div className="col">hama</div>
          <div className="col">hama</div>
          <div className="col">hama</div>
          <div className="col">hama</div>
        </div>
      </Slider>
    </StyledMediaSlide>
  );
};

export default MediaSlide;
