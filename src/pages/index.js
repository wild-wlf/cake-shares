import React from "react";
import TopBar from "../common/TopBar";
import Banner from "../components/atoms/banner";
import Categories from "../components/atoms/categories";
import CategoriesBar from "../components/atoms/categoriesbar";


const index = () => {
  return (
    <>
      <Banner />
      <CategoriesBar />
      <Categories />
      <Categories />
    </>
  );
};

export default index;
