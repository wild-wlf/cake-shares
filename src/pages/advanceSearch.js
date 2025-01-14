import React, { useCallback, useContext, useEffect, useState } from 'react';
import SearchHeader from '../components/atoms/searchHeader';
import SearchFilterFields from '../components/atoms/searchFilters';
import SearchSlider from '../components/atoms/searchSlider';
import AdvanceSearchGrid from '@/components/atoms/advanceSearchGrid';
import productService from '@/services/productService';
import { SearchContext } from '@/context/SearchContext';
import { NoRecord } from '@/components/atoms/categories/categories.style';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import InfiniteScroll from '@/components/molecules/InfiniteScroll';
import Toast from '@/components/molecules/Toast';
import { byIso } from 'country-code-lookup';

const AdvanceSearch = () => {
  const [listview, setListView] = useState(true);
  const { fetch } = useContextHook(AuthContext, v => ({
    fetch: v.fetch,
  }));
  const [dynamicVar, setDynamicVar] = useState({});

  const [sortFilter, setSortFilter] = useState(null);

  const handleViewController = () => {
    setListView(!listview);
  };

  const { searchResults, setSearchResults, searchQuery, setSearchQuery } = useContextHook(SearchContext, v => ({
    searchResults: v.searchResults,
    setSearchResults: v.setSearchResults,
    searchQuery: v.searchQuery,
    setSearchQuery: v.setSearchQuery,
  }));
  const [hasNextPage, setHasNextPage] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchProducts = useCallback(
    async payload => {
      try {
        const query = payload ? { ...payload } : searchQuery;

        const res = await productService.getSearchProducts(query);

        setSearchResults(prev => {
          const existingIds = prev.map(item => item._id);
          const newItems = res.items.filter(item => !existingIds.includes(item._id));
          return payload ? newItems : [...prev, ...newItems];
        });

        if (searchQuery?.page === 1) {
          setDynamicVar({
            priceRange: res?.priceStats,
            countries: [
              { label: 'All', value: '' },
              ...(res?.uniqueCountries?.map(ele => ({ label: byIso(ele)?.country, value: ele })) || []),
            ],
          });
        }

        setHasNextPage(res?.hasNextPage);
        setSearchQuery(prev => ({
          ...prev,
          ...(prev.page === 1
            ? { minInvestment: res?.priceStats?.minPrice, maxInvestment: res?.priceStats?.maxPrice }
            : {}),
          page: res?.nextPage,
        }));
      } catch ({ message }) {
        Toast({ type: 'error', message });
      }
    },
    [searchQuery, setSearchQuery, setSearchResults],
  );

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <SearchHeader
        handleViewController={handleViewController}
        listview={listview}
        selected={sortFilter}
        setSelected={setSortFilter}
        fetchProducts={fetchProducts}
      />

      <SearchFilterFields
        fetchProducts={fetchProducts}
        setSortFilter={setSortFilter}
        dynamicVar={dynamicVar}
        setDynamicVar={setDynamicVar}
      />
      <InfiniteScroll dataLength={searchResults?.length} fetchMore={fetchProducts} hasMore={hasNextPage}>
        {listview ? (
          searchResults.length > 0 ? (
            <SearchSlider data={searchResults} loading={loading} />
          ) : (
            <NoRecord>No Record Found</NoRecord>
          )
        ) : (
          <AdvanceSearchGrid data={searchResults} loading={loading} />
        )}
      </InfiniteScroll>
    </>
  );
};

export default AdvanceSearch;
