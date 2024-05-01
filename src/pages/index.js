import React from "react";
import TopBar from "../common/TopBar";
import Banner from "../components/atoms/banner";
import Categories from "../components/atoms/categories";
import CategoriesBar from "../components/atoms/categoriesbar";
import Property from "../_assets/property.png";
import Property2 from "../_assets/property2.png";
import Property3 from "../_assets/property3.png";

const index = () => {
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
  return (
    <>
      <Banner />
      <CategoriesBar />
      <Categories title="Popular Investments" arr={images} />
      <Categories title="Recommended Investments" arr={images} />
    </>
  );
};

export default index;
