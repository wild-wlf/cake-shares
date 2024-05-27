import React from "react";
import { CategoriesWrapper } from "./categories.style";
import Slider from "react-slick";
import Card from "../card";
import arrowRight from "../../../_assets/arrow.png";
import Property from "../../../_assets/property.png";
import Property2 from "../../../_assets/property2.png";
import Property3 from "../../../_assets/property3.png";
import Link from "next/link";

const images = [
  {
    image: Property,
    id: "1",
  },
  {
    id: "2",
    image: Property2,
  },
  {
    image: Property3,
    id: "3",
  },
  {
    image: Property,
    id: "4",
  },
  {
    image: Property2,
    id: "5",
  },
  {
    image: Property3,
    id: "6",
  },
];
const Categories = ({ title, arr = images, data }) => {
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
          {data?.products?.map((_, index) => (
            <Link href={`/products/${_._id}`} key={index}>
              <Card c_data={_} Cardimage={_.media[0] || Property} />
            </Link>
          ))}
        </Slider>
      </div>
    </CategoriesWrapper>
  );
};

export default Categories;
