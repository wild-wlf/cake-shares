import React from 'react';
import { Wrapper } from './searchSlider.style';
import Slider from 'react-slick';
import Card from '../card';
import arrowRight from '../../../_assets/arrow-right.svg';
import Property from '../../../_assets/property.png';
import Property2 from '../../../_assets/property2.png';
import Property3 from '../../../_assets/property3.png';
import Link from 'next/link';
import { CategoriesWrapper, NoRecord } from '../categories/categories.style';
import Skeletonn from '../skeleton/Skeletonn';

const index = ({ data, loading }) => {
  const images = [
    {
      image: Property,
      id: '1',
    },
    {
      id: '2',
      image: Property2,
    },
    {
      image: Property3,
      id: '3',
    },
    {
      image: Property,
      id: '4',
    },
    {
      image: Property2,
      id: '5',
    },
    {
      image: Property3,
      id: '6',
    },
  ];
  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: { slidesToShow: 4.8 },
      },
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
        settings: { slidesToShow: 2.9 },
      },
      {
        breakpoint: 510,
        settings: { slidesToShow: 2.5 },
      },
      {
        breakpoint: 430,
        settings: { slidesToShow: 2.1 },
      },
    ],
  };
  return (
    <CategoriesWrapper image={arrowRight}>
      <div className="slider">
        {loading ? (
          <Slider {...settings}>
            {Array.from({ length: 5 }).map((_, idx) => (
              <Skeletonn height="238" radius="14px" key={idx} />
            ))}
          </Slider>
        ) : (
          data &&
          data?.length > 0 && (
            <Slider {...settings}>
              {data.map((c_data, index) => (
                <Link href={`/products/${c_data?._id}`} key={index}>
                  <Card Cardimage={c_data?.media[0]} c_data={c_data} />
                </Link>
              ))}
            </Slider>
          )
        )}
      </div>
    </CategoriesWrapper>
  );
};

export default index;
