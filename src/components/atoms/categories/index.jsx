import React from "react";
import { CategoriesWrapper } from "./categories.style";
import Slider from "react-slick";
import Card from "../card";
import arrowRight from "../../../_assets/arrow.png";

import Link from "next/link";

const index = ({ title, arr }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5.2,
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
    <CategoriesWrapper image={arrowRight}>
      <div className="title">
        <span>{title}</span>
      </div>
      <div className="slider">
        <Slider {...settings}>
          {arr?.map((data, index) => (
            <Link href={`/products/${data.id}`} key={index}>
              <Card Cardimage={data.image} />
            </Link>
          ))}
        </Slider>
      </div>
    </CategoriesWrapper>
  );
};

export default index;
