import React, { useState } from "react";
import { CategoriesBarWrapper } from "./categoriesbar.style";
import Button from "@/components/atoms/Button";
import Slider from "react-slick";
import all from "../../../_assets/all.svg";
import Image from "next/image";
import { FaFire } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { TbBuildingFactory } from "react-icons/tb";
import { PiStorefrontFill } from "react-icons/pi";
import { FaCarAlt } from "react-icons/fa";
import { HiHeart } from "react-icons/hi2";
import { AiFillDollarCircle } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import CenterModal from "../Modal/CenterModal";
import AdvanceSearch from "../advanceSearch";

const CategoriesBar = () => {
  const [modal, setModal] = useState(false);
  const [Tab, setTab] = useState(1);

  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7.2,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: { slidesToShow: 6.5 },
      },
      {
        breakpoint: 1100,
        settings: { slidesToShow: 5.5 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 4.2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 620,
        settings: { slidesToShow: 3.5 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 3 },
      },
    ],
  };
  const categoryData = [
    {
      image: <FaCarAlt />,
      text: "All",
    },
    {
      image: <FaFire />,
      text: "Popular",
    },
    {
      image: <FaHouseChimney />,
      text: "Properties",
    },
    {
      image: <TbBuildingFactory />,
      text: "Ventures",
    },
    {
      image: <PiStorefrontFill />,
      text: "Bazaar",
    },
    {
      image: <FaCarAlt />,
      text: "Vahicals",
    },
    {
      image: <HiHeart />,
      text: "My Favorite",
    },
    {
      image: <AiFillDollarCircle />,
      text: "High Funding",
    },
  ];
  return (
    <>
      <CenterModal
        open={modal}
        setOpen={setModal}
        title={"Advance Search"}
        width="670">
        <AdvanceSearch />
      </CenterModal>
      <CategoriesBarWrapper>
        <div className="maindiv">
          <div className="slider">
            <Slider {...settings}>
              {categoryData?.map((item, index) => (
                <div key={index}>
                  <Button
                    rounded
                    sm
                    btntype="white"
                    className={Tab === index ? "active" : "button"}
                    onClick={() => setTab(index)}>
                    {/* <Image src={item.image} alt="all" /> */}
                    {item.image}
                    {item.text}
                  </Button>
                </div>
              ))}
              {/* <div>
                <Button rounded sm btntype="new" className="button">
                  <Image src={all} alt="all" />
                  All
                </Button>
              </div>
              <div>
                <Button rounded sm btntype="white" className="button">
                  <FaFire />
                  Popular
                </Button>
              </div>
              <div>
                <Button rounded sm btntype="white" className="button">
                  <FaHouseChimney />
                  Properties
                </Button>
              </div>
              <div>
                <Button rounded sm btntype="white" className="button">
                  <TbBuildingFactory />
                  Ventures
                </Button>
              </div>
              <div>
                <Button rounded sm btntype="white" className="button">
                  <PiStorefrontFill />
                  Bazaar
                </Button>
              </div>
              <div>
                <Button rounded sm btntype="white" className="button">
                  <FaCarAlt />
                  Vehicles
                </Button>
              </div>
              <div>
                <Button rounded sm btntype="white" className="button lg">
                  <HiHeart />
                  My Favorites
                </Button>
              </div>
              <div>
                <Button rounded sm btntype="white" className="button lg">
                  <AiFillDollarCircle />
                  High Funding
                </Button>
              </div> */}
            </Slider>
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
