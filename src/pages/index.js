import React from "react";
import Banner from "../components/atoms/banner";
import Categories from "../components/atoms/categories";
import CategoriesBar from "../components/atoms/categoriesbar";


const index = () => {
  return (
    <>
      <Banner />
      <CategoriesBar />
      <Categories title="Popular Investments" />
      <Categories title="Recommended Investments" />
    </>
  );
};

export default index;
