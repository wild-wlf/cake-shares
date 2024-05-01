import React from "react";
import Banner from "../components/atoms/banner";
import Categories from "../components/atoms/categories";
import CategoriesBar from "../components/atoms/categoriesbar";

export const images = [
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
