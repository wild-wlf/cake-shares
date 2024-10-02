import { useState, useMemo } from 'react';
import { createContextHook } from 'use-context-hook';

export const SearchContext = createContextHook();

export const SearchContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    itemsPerPage: 12,
    searchText: '',
    type: '',
    investmentType: '',
    country: '',
    kycLevel: '',
    minBackers: '',
    maxDaysLeft: '',
    minFundsRaised: '',
    maxAnnualCost: '',
    minInvestment: '',
    maxInvestment: '',
  });

  const [countries, setCountries] = useState([]);

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
      maxAnnualCost: '',
      minInvestment: '',
      maxInvestment: '',
    });
  }

  const contextValue = {
    searchResults,
    searchQuery,
    countries,
    setSearchQuery,
    handleSearchQuery,
    handleClearQuery,
    setSearchQuery,
    setSearchResults,
    setCountries,
  };
  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
};
