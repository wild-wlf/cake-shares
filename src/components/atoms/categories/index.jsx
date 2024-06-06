import React from "react";
import { CategoriesWrapper, NoRecord } from "./categories.style";
import Slider from "react-slick";
import Card from "../card";
import arrowRight from "../../../_assets/arrow.png";
import Property from "../../../_assets/property.png";
import Link from "next/link";
import Loader from "../Loader";

const Categories = ({ title, data, loading }) => {
  const settings = {
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
console.log(data);
  return (
    <CategoriesWrapper image={arrowRight}>
      <div className="title">
        <span>{title}</span>
      </div>
      {loading ? (
        <Loader />
      ) : data && data?.length > 0 ? (
        <div className="slider">
          <Slider {...settings}>
            {data?.map((item, index) => (
              <Link href={`/products/${item._id}`} key={index}>
                <Card c_data={item} Cardimage={item.media[0] || Property} />
              </Link>
            ))}
          </Slider>
        </div>
      ) : (
        <NoRecord>No records found</NoRecord>
      )}
    </CategoriesWrapper>
  );
};

export default Categories;
