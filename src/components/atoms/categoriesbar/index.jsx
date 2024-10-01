import React, { useState, useMemo } from 'react';
import { CategoriesBarWrapper } from './categoriesbar.style';
import Button from '@/components/atoms/Button';
import Slider from 'react-slick';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import CenterModal from '../Modal/CenterModal';
import AdvanceSearch from '../advanceSearch';
import Skeletonn from '../skeleton/Skeletonn';
import categoryService from '@/services/categoryService';

const predefinedOrder = [
  'All',
  'Properties',
  'Classic cars',
  'Watches',
  'Luxury items',
  'New Ventures',
  'Corporate Investments',
  'Trade Hub',
  'Asset Backed Lending',
  'Banking Products',
  'Bazaar',
];

// Category colors mapping
const categoryColors = {
  'Properties': 'green',
  'Classic cars': 'green',
  'Watches': 'green',
  'Luxury items': 'red',
  'New Ventures': 'yellow',
  'Corporate Investments': 'yellow',
  'Trade Hub': 'red',
  'Asset Backed Lending': 'green',
  'Banking Products': 'green',
  'Bazaar': 'red',
};

const CategoriesBar = ({ setSearchQuery, priceRange }) => {
  const [modal, setModal] = useState(false);
  const [Tab, setTab] = useState(0);

  const { categories_data, categories_loading } = categoryService.GetAllCategories({ getAll: true });

  const categoriesOptions = useMemo(() => {
    // Create an object to map category names to their order index
    const orderMapping = predefinedOrder.reduce((acc, category, index) => {
      acc[category] = index;
      return acc;
    }, {});

    // Map and sort categories based on the predefined order
    const sortedCategories = categories_data.categories
      .map((ele) => ({
        label: ele?.name,
        value: ele?._id,
        icon: ele?.icon,
      }))
      .sort((a, b) => {
        const orderA = orderMapping[a.label] ?? Infinity;
        const orderB = orderMapping[b.label] ?? Infinity;
        return orderA - orderB;
      });

    // Include 'All' category at the top if it's not already included in sorted categories
    const allCategory = {
      label: 'All',
      value: '',
    };

    return [allCategory, ...sortedCategories];
  }, [categories_data]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: categoriesOptions && categoriesOptions?.length > 1 && true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    variableWidth: true,
    swipeToSlide: true,
  };

  return (
    <>
      <CenterModal open={modal} setOpen={setModal} title="Advanced Search" width="670">
        <AdvanceSearch priceRange={priceRange} />
      </CenterModal>
      <CategoriesBarWrapper>
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
                  <div key={index}>
                    <Button
                      rounded
                      sm

                      style={{
                        color: Tab === index ? categoryColors[item?.label] : 'black',
                        //  color: Tab === index ? 'white' : 'black',
                      }}
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
                  </div>
                ))}
              </Slider>
            )}
          </div>
          <div className="search" onClick={() => setModal(true)}>
            <input type="text" placeholder="Search" readOnly />
            <CiSearch className="searchicon" />
          </div>
        </div>
      </CategoriesBarWrapper>
    </>
  );
};

export default CategoriesBar;
