import React from "react";
import Banner from "../components/atoms/banner";
import Categories from "../components/atoms/categories";
import CategoriesBar from "../components/atoms/categoriesbar";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "@/components/Context/authContext";

const Home = () => {
  const { user, isLoggedIn } = useContextHook(AuthContext, (v) => ({
    user: v.user,
    isLoggedIn: v.isLoggedIn,
  }));
  // console.log(user);
  return (
    <>
      <Banner />
      <CategoriesBar />
      <Categories title="Popular Investments" />
      <Categories title="Recommended Investments" />
    </>
  );
};

export default Home;
