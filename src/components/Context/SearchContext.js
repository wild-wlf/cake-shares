import { getCookie } from '@/helpers/common';
import { useState, createContext, useEffect } from 'react';

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState({
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
  const contextValue = {
    searchQuery,
    setSearchQuery,
    handleSearchQuery,
  };

  console.log('page', searchQuery);
  function handleSearchQuery(elem) {
    setSearchQuery(prev => ({ ...prev, ...elem }));
  }
  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
};
