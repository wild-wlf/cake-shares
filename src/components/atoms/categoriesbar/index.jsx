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
import { BiSolidCategory } from "react-icons/bi";

const CategoriesBar = ({categories,loading}) => {
  const [modal, setModal] = useState(false);
  const [Tab, setTab] = useState(0);
  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    // slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
  };
  const categoryData = [
    {
      image: <BiSolidCategory />,
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
      text: "Vehicals",
    },
    {
      image: <HiHeart />,
      text: "My Favorite",
    },
    {
      image: <AiFillDollarCircle />,
      text: "High Funding",
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
      text: "Vehicals",
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
        width="670"
      >
        <AdvanceSearch />
      </CenterModal>
      <CategoriesBarWrapper>
        <div className="maindiv">
          <div className="slider">
            {
              loading ? 
                "Loading..." :

            <Slider {...settings}>
              {categories?.map((item, index) => (
                <div key={index}>
                  <Button
                    rounded
                    sm
                    btntype={Tab === index ? "light-green" : "white"}
                    className={Tab === index ? "button active" : "button"}
                    onClick={() => setTab(index)}
                  >
                    {item.name}
                  </Button>
                </div>
              ))}
            </Slider>
            }
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
