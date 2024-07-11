import { useState, useMemo } from 'react';
import { createContextHook } from 'use-context-hook';

export const SearchContext = createContextHook();

export const SearchContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    itemsPerPage: 12,
    searchText: '',
    popular: '',
    type: '',
    investmentType: '',
    country: '',
    kycLevel: '',
    minBackers: '',
    maxDaysLeft: '',
    minFundsRaised: '',
    minAnnualCost: '',
    minInvestment: '',
    maxInvestment: '',
  });

  const [searchResults, setSearchResults] = useState([]);

  function handleSearchQuery(elem) {
    setSearchResults([]);
    setSearchQuery(prev => ({ ...prev, ...elem }));
  }

  function handleClearQuery() {
    setSearchResults([]);
    setSearchQuery({
      page: 1,
      itemsPerPage: 12,
      searchText: '',
      popular: '',
      type: '',
      investmentType: '',
      country: '',
      kycLevel: '',
      minBackers: '',
      maxDaysLeft: '',
      minFundsRaised: '',
      minAnnualCost: '',
      minInvestment: '',
      maxInvestment: '',
    });
  }

  const contextValue = {
    searchResults,
    searchQuery,
    setSearchQuery,
    handleSearchQuery,
    handleClearQuery,
    setSearchQuery,
    setSearchResults,
  };
  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
};
