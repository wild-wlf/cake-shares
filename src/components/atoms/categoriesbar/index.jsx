import React, { useState, useMemo } from 'react';
import { CategoriesBarWrapper } from './categoriesbar.style';
import Button from '@/components/atoms/Button';
import Slider from 'react-slick';
import all from '../../../_assets/all.svg';
import Image from 'next/image';
import { FaFire } from 'react-icons/fa';
import { FaHouseChimney } from 'react-icons/fa6';
import { TbBuildingFactory } from 'react-icons/tb';
import { PiStorefrontFill } from 'react-icons/pi';
import { FaCarAlt } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi2';
import { AiFillDollarCircle } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import CenterModal from '../Modal/CenterModal';
import AdvanceSearch from '../advanceSearch';
import { BiSolidCategory } from 'react-icons/bi';
import Skeletonn from '../skeleton/Skeletonn';

const CategoriesBar = ({ categories, loading, setSearchQuery }) => {
  const [modal, setModal] = useState(false);
  const [Tab, setTab] = useState(0);
  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    // slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
  };

  const categoriesOptions = useMemo(
    () => [
      {
        label: 'All',
        value: '',
      },
      ...categories.map(ele => ({
        label: ele?.name,
        value: ele?._id,
        icon: ele?.icon,
      })),
    ],
    [categories],
  );

  return (
    <>
      <CenterModal open={modal} setOpen={setModal} title={'Advanced Search'} width="670">
        <AdvanceSearch />
      </CenterModal>
      <CategoriesBarWrapper>
        <div className="maindiv">
          <div className="slider">
            {loading ? (
              <Slider {...settings}>
                {Array.from({ length: 10 }).map((_, ind) => (
                  <Button rounded sm btntype={'white'} key={ind}>
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
                      btntype={Tab === index ? 'light-green' : 'white'}
                      className={Tab === index ? 'button active' : 'button'}
                      onClick={() => {
                        setTab(index);
                        setSearchQuery(prev => ({
                          ...prev,
                          category: item?.value,
                        }));
                      }}>
                     {item.label !=='All' && <Image src={item.icon} alt='icons' width={36} height={36}/>}
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
