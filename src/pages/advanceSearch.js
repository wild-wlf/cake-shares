import React, { useState } from 'react';
import SearchHeader from '../components/atoms/searchHeader';
import SearchFilterFields from '../components/atoms/searchFilters';
import SearchSlider from '../components/atoms/searchSlider';
import AdvanceSearchGrid from '@/components/atoms/advanceSearchGrid';

const AdvanceSearch = () => {
  const [listview, setListView] = useState(true);

  const handleViewController = () => {
    setListView(!listview);
  };

  return (
    <>
      <SearchHeader handleViewController={handleViewController} listview={listview} />
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
