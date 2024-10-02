import React, { useEffect, useState } from 'react';
import Banner from '../components/atoms/banner';
import Categories from '../components/atoms/categories';
import CategoriesBar from '../components/atoms/categoriesbar';
import productService from '@/services/productService';
import Head from 'next/head';
import { useContextHook } from 'use-context-hook';
import { SearchContext } from '@/context/SearchContext';
import { byIso } from 'country-code-lookup';

const Home = () => {
  const { setCountries } = useContextHook(SearchContext, v => ({
    setCountries: v.setCountries,
  }));
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    pageSize: 12,
    category: '',
  });

  const { products_data, products_loading } = productService.GetProducts(searchQuery);

  useEffect(() => {
    setCountries([
      { label: 'All', value: '' },
      ...(products_data?.countries?.map(ele => ({ label: byIso(ele)?.country, value: ele })) || []),
    ]);
  }, [products_data]);

  return (
    <>
      <Head>
        <title>CAKESHARES</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Banner />
      <CategoriesBar setSearchQuery={setSearchQuery} priceRange={products_data.priceRange} />
      <Categories
        title="Popular Investments"
        data={products_data?.popularProducts}
        hasNextPage={products_data.popularProductsHasNextPage}
        loading={products_loading}
        priceRange={products_data?.priceRange}
        countries={products_data?.countries}
      />
      <Categories
        title="Advertised Investments"
        data={products_data?.advertisedProducts}
        hasNextPage={products_data.advertisedProductsHasNextPage}
        loading={products_loading}
        priceRange={products_data?.priceRange}
        countries={products_data?.countries}
      />
    </>
  );
};

export default Home;
