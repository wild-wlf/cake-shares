import React from 'react';
import Image from 'next/image';
import { BannerWrapper, SlideWrapp } from './banner.style';
import banner1desk from '../../../_assets/slide1desk.png';
import bannerImg1 from '../../../_assets/banner-img-1.png';
import banner2desk from '../../../_assets/slide2desk.png';
import bannerImg2 from '../../../_assets/banner-img-2.png';
import banner3desk from '../../../_assets/slide3desk.png';
import bannerImg3 from '../../../_assets/banner-img-3.png';
import banner1resp from '../../../_assets/slide1resp.png';
import banner2resp from '../../../_assets/mobile-img.png';
import banner3resp from '../../../_assets/slide3resp.png';
import Slider from 'react-slick';

const Banner = ({ setTab, categories_data, setSearchQuery }) => {

  const handleCategoryClick = (categoryName) => {
    const findIndexOfCategory = categories_data?.categories.findIndex(ele => ele.name === categoryName);

    setTab(findIndexOfCategory + 1);

    setSearchQuery((prev) => ({
      ...prev,
      category: categories_data?.categories[findIndexOfCategory]?._id,
    }));
  };

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
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
    <BannerWrapper>
      <Slider {...settings}>
        <SlideWrapp $bg={banner1desk} $resp={banner1resp}>
          <div className="textWrapp">
            <strong className='heading'>Turkish Government, House Bonds!</strong>
            <div className='text'>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
            </div>
            <button onClick={() => handleCategoryClick('Properties')} className="btn">Browse Category</button>
          </div>

          <figure className="img-holder">
            <Image src={bannerImg1} alt="bannerImg1" />
          </figure>
        </SlideWrapp>
        <SlideWrapp $bg={banner2desk} $resp={banner2resp}>
          <div className="textWrapp">
            <strong className='heading'>Find Best Apartments to make an Investment!</strong>
            <div className='text'>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
            </div>
            <button onClick={() => handleCategoryClick('Watches')} className="btn">Browse Category</button>
          </div>
          <figure className="img-holder">
            <Image src={bannerImg2} alt="bannerImg1" />
          </figure>
        </SlideWrapp>
        <SlideWrapp $bg={banner3desk} $resp={banner3resp}>
          <div className="textWrapp">
            <strong className='heading'>Ferrari Car Shares Investment Scheme!</strong>
            <div className='text'>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
            </div>
            <button onClick={() => handleCategoryClick('Classic Cars')} className="btn">Browse Category</button>
          </div>
          <figure className="img-holder">
            <Image src={bannerImg3} alt="bannerImg1" />
          </figure>
        </SlideWrapp>
      </Slider>
    </BannerWrapper>
  );
};

export default Banner;
