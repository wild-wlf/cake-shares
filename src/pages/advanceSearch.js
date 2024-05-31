import React, { useState } from "react";
import SearchHeader from "../components/atoms/searchHeader";
import SearchFilterFields from "../components/atoms/searchFilters";
import SearchSlider from "../components/atoms/searchSlider";
import AdvanceSearchGrid from "@/components/atoms/advanceSearchGrid";
import productService from '@/services/productService';

const AdvanceSearch = () => {
  const [listview, setListView] = useState(true);

  const handleViewController = () => {
    setListView(!listview);
  };
  const { products_data, products_loading } = productService.GetProducts();
  console.log(products_data);
  return (
    <>
      <SearchHeader
        handleViewController={handleViewController}
        listview={listview}
      />
      <SearchFilterFields />
      {listview ? (
        <>
          <SearchSlider />
          <SearchSlider />
          <SearchSlider />
        </>
      ) : (
        <AdvanceSearchGrid />
      )}
    </>
  );
};

export default AdvanceSearch;
