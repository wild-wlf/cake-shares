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
  // const { products_data, products_loading } = productService.GetProducts(searchQuery);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function AdvanceFilter() {
      setLoading(true);
      try {
        const res = await productService.getSearchProducts(searchQuery);
        setData(res?.items);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
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
          <SearchSlider data={data} loading={loading} />
          <SearchSlider data={data} loading={loading} />
          <SearchSlider data={data} loading={loading} />
        </>
      ) : (
        <AdvanceSearchGrid data={data} loading={loading} />
      )}
    </>
  );
};

export default AdvanceSearch;
