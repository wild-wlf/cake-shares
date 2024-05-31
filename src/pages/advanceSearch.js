import React, { useState } from 'react';
import SearchHeader from '../components/atoms/searchHeader';
import SearchFilterFields from '../components/atoms/searchFilters';
import SearchSlider from '../components/atoms/searchSlider';
import AdvanceSearchGrid from '@/components/atoms/advanceSearchGrid';
import productService from '@/services/productService';

const AdvanceSearch = () => {
  const [listview, setListView] = useState(true);

  const handleViewController = () => {
    setListView(!listview);
  };

  let [searchQuery, setSearchQuery] = useState({
    investmentType: '',
    country: '',
    kycLevel: '',
    minInvestment: '',
    maxInvestment: '',
    minBackers: '',
    maxDaysLeft: '',
    minFundsRaised: '',
    minAnnualCost: '',
  });
  // console.log('page', searchQuery);

  const { products_data, products_loading } = productService.GetProducts(searchQuery);
  console.log(products_data);
  return (
    <>
      <SearchHeader handleViewController={handleViewController} listview={listview} />
      <SearchFilterFields setSearchQuery={setSearchQuery} />
      {listview ? (
        <>
          <SearchSlider data={products_data?.popularProducts} />
          <SearchSlider data={products_data?.popularProducts} />
          <SearchSlider data={products_data?.popularProducts} />
        </>
      ) : (
        <AdvanceSearchGrid data={products_data?.popularProducts} />
      )}
    </>
  );
};

export default AdvanceSearch;
