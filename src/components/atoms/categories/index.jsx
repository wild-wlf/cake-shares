import React from "react";
import { Wrapper } from "./categories.style";
import Slider from "react-slick";
import Card from "../card";
import arrowRight from "../../../pages/_assets/arrow-right.svg";
import Link from "next/link";

const index = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4.5 },
      },
      {
        breakpoint: 1100,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1000,
        settings: { slidesToShow: 3.5 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 700,
        settings: { slidesToShow: 3.5 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 510,
        settings: { slidesToShow: 2.5 },
      },
      {
        breakpoint: 430,
        settings: { slidesToShow: 2 },
      },
    ],
  };
  return (
    <Wrapper image={arrowRight}>
      <div className="title">
        <span>Popular Investments</span>
      </div>
      <div className="slider">
        <Slider {...settings}>
          <div>
            <Link href="/productDetails/1">
              <Card />
            </Link>
          </div>
          <div>
            <Link href={{ pathname: "/productDetails/2" }}>
              <Card />
            </Link>
          </div>
          <div>
            <Link href={{ pathname: "/productDetails/3" }}>
              <Card />
            </Link>
          </div>
          <div>
            <Link href={{ pathname: "/productDetails/4" }}>
              <Card />
            </Link>
          </div>
          <div>
            <Link href={{ pathname: "/productDetails/5" }}>
              <Card />
            </Link>
          </div>
          <div>
            <Link href={{ pathname: "/productDetails/6" }}>
              <Card />
            </Link>
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
};

export default index;
