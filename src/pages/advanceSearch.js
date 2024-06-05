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

  const { searchQuery } = useContext(SearchContext);
  const { products_data, products_loading } = productService.GetProducts(searchQuery);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function AdvanceFilter() {
      try {
        const res = await productService.getSearchProducts(searchQuery);
        setData(res?.items);
      } catch (err) {
        console.log(err);
      }
    }
    AdvanceFilter();
  }, [searchQuery]);

  return (
    <>
      <SearchHeader handleViewController={handleViewController} listview={listview} />
      <SearchFilterFields />
      {listview ? (
        <>
          <SearchSlider data={data} />
          <SearchSlider data={data} />
          <SearchSlider data={data} />
        </>
      ) : (
        <AdvanceSearchGrid data={data} />
      )}
    </>
  );
};

export default AdvanceSearch;
