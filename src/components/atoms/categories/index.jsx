import React from 'react';
import { CategoriesWrapper, NoRecord } from './categories.style';
import Slider from 'react-slick';
import Card from '../card';
import arrowRight from '../../../_assets/arrow.png';
import Property from '../../../_assets/property.png';
import Link from 'next/link';
import Skeletonn from '../skeleton/Skeletonn';
import Button from '../Button';
import { useRouter } from 'next/router';
import { useContextHook } from 'use-context-hook';
import { SearchContext } from '@/context/SearchContext';

const Categories = ({ title, data, hasNextPage, loading, priceRange }) => {
  const { setSearchQuery } = useContextHook(SearchContext, v => ({
    setSearchQuery: v.setSearchQuery,
  }));
  const router = useRouter();
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
  return (
    <CategoriesWrapper image={arrowRight} $slide>
      <div className="title">
        <span>{title}</span>
        {hasNextPage && (
          <Button
            onClick={() => {
              setSearchQuery(prev => ({
                ...prev,
                minInvestment: priceRange.minPrice,
                maxInvestment: priceRange.maxPrice,
              }));
              router.push('/advanceSearch');
            }}
            rounded
            sm
            btntype="primary"
            className="button">
            View All
          </Button>
        )}
      </div>
      {loading ? (
        <Slider {...settings}>
          {Array.from({ length: 5 }).map((_, idx) => (
            <Skeletonn height="238" radius="14px" key={idx} />
          ))}
        </Slider>
      ) : data && data?.length > 0 ? (
        <div className="slider">
          {data &&
            data.length > 0 &&
            data.map((c_data, index) => (
              <div className="card" key={index}>
                <Link href={`/products/${c_data?._id}`}>
                  <Card Cardimage={c_data?.media[0]} c_data={c_data} />
                </Link>
              </div>
            ))}
          {/* <Slider {...settings}>
            {data?.map((item, index) => (
              <Link href={`/products/${item._id}`} key={index}>
                <Card c_data={item} Cardimage={item?.media[1] || Property} />
              </Link>
            ))}
          </Slider> */}
        </div>
      ) : (
        <NoRecord>No records found</NoRecord>
      )}
    </CategoriesWrapper>
  );
};

export default Categories;
