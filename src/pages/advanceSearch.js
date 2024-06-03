import React, { useContext, useEffect, useState } from 'react';
import SearchHeader from '../components/atoms/searchHeader';
import SearchFilterFields from '../components/atoms/searchFilters';
import SearchSlider from '../components/atoms/searchSlider';
import AdvanceSearchGrid from '@/components/atoms/advanceSearchGrid';
import productService from '@/services/productService';
import { SearchContext } from '@/components/Context/SearchContext';

const AdvanceSearch = () => {
  const [listview, setListView] = useState(true);

  const handleViewController = () => {
    setListView(!listview);
  };

  // console.log('page', searchQuery);

  const { searchQuery } = useContext(SearchContext);
  const { products_data, products_loading } = productService.GetProducts(searchQuery);

  useEffect(() => {
    try {
      const res = productService.getSearchProducts(searchQuery);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <SearchHeader handleViewController={handleViewController} listview={listview} />
      <SearchFilterFields />
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
