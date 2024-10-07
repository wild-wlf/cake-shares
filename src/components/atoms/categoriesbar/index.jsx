import React, { useState, useMemo } from 'react';
import { CategoriesBarWrapper, StyledCategories } from './categoriesbar.style';
import Button from '@/components/atoms/Button';
import Slider from 'react-slick';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import CenterModal from '../Modal/CenterModal';
import AdvanceSearch from '../advanceSearch';
import Skeletonn from '../skeleton/Skeletonn';

const CategoriesBar = ({ setSearchQuery, priceRange, categories_data, categories_loading, Tab, setTab }) => {
  const [modal, setModal] = useState(false);

  const categoriesOptions = useMemo(() =>
    [
      { value: '', label: 'All', bgColor: "rgba(64, 143, 140, 0.2)", textColor: "#408f8c" },
      ...(categories_data?.categories?.map(ele => ({
        value: ele?._id,
        label: ele?.name,
        icon: ele?.icon,
        bgColor: ele?.bgColor,
        textColor: ele?.textColor
      })) || []),
    ]
    , [categories_data]);


  const settings = {
    dots: false,
    arrows: false,
    infinite: categoriesOptions && categoriesOptions?.length > 1 && true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    variableWidth: true,
    swipeToSlide: true,
  };

  return (
    <>
      <CenterModal open={modal} setOpen={setModal} title="Advanced Search" width="670">
        <AdvanceSearch priceRange={priceRange} />
      </CenterModal>
      <CategoriesBarWrapper >
        <div className="maindiv">
          <div className="slider">
            {categories_loading ? (
              <Slider {...settings}>
                {Array.from({ length: 10 }).map((_, ind) => (
                  <Button rounded sm btntype="white" key={ind}>
                    <Skeletonn width="100" height="20" />
                  </Button>
                ))}
              </Slider>
            ) : (
              <Slider {...settings}>
                {categoriesOptions?.map((item, index) => (
                  <StyledCategories key={index} $bgColor={item?.bgColor} $textColor={item?.textColor}>
                    <Button
                      rounded
                      sm
                      className={Tab === index ? 'button active' : 'button'}
                      onClick={() => {
                        setTab(index);
                        setSearchQuery((prev) => ({
                          ...prev,
                          category: item?.value,
                        }));
                      }}
                    >
                      {item.label !== 'All' && (
                        <div className="sliderCatImage">
                          <Image src={item.icon} alt="icons" width={36} height={36} />
                        </div>
                      )}
                      {item.label}
                    </Button>
                  </StyledCategories>
                ))}
              </Slider>
            )}
          </div>
          <div className="search" onClick={() => setModal(true)}>
            <input type="text" placeholder="Search" readOnly />
            <CiSearch className="searchicon" />
          </div>
        </div>
      </CategoriesBarWrapper >
    </>
  );
};

export default CategoriesBar;
