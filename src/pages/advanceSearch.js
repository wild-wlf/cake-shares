import React from "react";
import TopBar from "./common/TopBar";
import SearchHeader from "../components/atoms/searchHeader";
import SearchFilterFields from "../components/atoms/searchFilters";
import SearchSlider from "../components/atoms/searchSlider";

const advanceSearch = () => {
  return (
    <>
      <TopBar />
      <SearchHeader />
      <SearchFilterFields />
      <SearchSlider />
      <SearchSlider />
      <SearchSlider />
    </>
  );
};

export default advanceSearch;
