import categoryService from '@/services/categoryService';
import { useState, createContext,  useMemo } from 'react';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from './authContext';

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
  const { fetch } = useContextHook(AuthContext, v => ({
    fetch: v.fetch,
  }));
  const { categories_data } = categoryService.GetAllCategories(
    {
      getAll: true,
    },
    fetch,
  );
  const categoriesOptions = useMemo(() => {
    return categories_data?.items
      ?.filter(item => item?.status !== 'Inactive')
      ?.map(ele => ({
        value: ele?._id,
        label: ele?.name,
      }));
  }, [categories_data?.items]);

  function handleSearchQuery(elem) {
    setSearchQuery(prev => ({ ...prev, ...elem }));
  }
  function handleClearQuery() {
    setSearchQuery({
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
  }
  const contextValue = {
    searchQuery,
    setSearchQuery,
    handleSearchQuery,
    handleClearQuery,
    categoriesOptions,
  };
  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
};
