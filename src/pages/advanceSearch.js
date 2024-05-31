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
  console.log('page', searchQuery);
  return (
    <>
      <SearchHeader handleViewController={handleViewController} listview={listview} />
      <SearchFilterFields setSearchQuery={setSearchQuery} />
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
