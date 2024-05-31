import React, { useState } from 'react';
import Head from 'next/head';
import Banner from '../components/atoms/banner';
import Categories from '../components/atoms/categories';
import CategoriesBar from '../components/atoms/categoriesbar';
import productService from '@/services/productService';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    pageSize: 10,
    searchText: '',
    startDate: '',
    endDate: '',
    filterRoles: '',
  });

  const { products_data, products_loading } = productService.GetProducts(searchQuery);
  return (
    <>
      <Head>
        <title>CAKESHARES</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Banner />
      <CategoriesBar />
      <Categories title="Popular Investments" data={products_data.popularProducts} loading={products_loading} />
      <Categories title="Recommended Investments" data={products_data.recommendedProducts} loading={products_loading} />
    </>
  );
};

export default Home;
