import React, { useState } from "react";
import Banner from "../components/atoms/banner";
import Categories from "../components/atoms/categories";
import CategoriesBar from "../components/atoms/categoriesbar";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "@/components/Context/authContext";
import productService from "@/services/productService";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    pageSize: 10,
    searchText: "",
    startDate: "",
    endDate: "",
    filterRoles: "",
  });
  const { user, isLoggedIn } = useContextHook(AuthContext, (v) => ({
    user: v.user,
    isLoggedIn: v.isLoggedIn,
  }));

  const { products_data } = productService.GetProducts(searchQuery);

  return (
    <>
      <Banner />
      <CategoriesBar />
      <Categories title="Popular Investments" data={products_data} />
      <Categories title="Recommended Investments" data={products_data} />
    </>
  );
};

export default Home;
