import React, { useEffect, useState } from 'react';
import Banner from '../components/atoms/banner';
import Categories from '../components/atoms/categories';
import CategoriesBar from '../components/atoms/categoriesbar';
import productService from '@/services/productService';
import Head from 'next/head';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    pageSize: 10,
    searchText: '',
    startDate: '',
    endDate: '',
    filterRoles: '',
  });
  const [categories, setCategoriesBar] = useState([]);
  const [categoriesLoading, setCategoriesBarLoading] = useState(false);

  const { products_data, products_loading } = productService.GetProducts(searchQuery);
  useEffect(() => {
    async function getCategories() {
      setCategoriesBarLoading(true);
      try {
        const res = await productService.getAllCategories();
        setCategoriesBar(res?.items);
      } catch (error) {
        console.log(error);
      } finally {
        setCategoriesBarLoading(false);
      }
    }
    getCategories();
  }, []);
  console.log(products_data.popularProducts);
  return (
    <>
      <Head>
        <title>CAKESHARES</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Banner />
      <CategoriesBar categories={categories} loading={categoriesLoading} />
      <Categories title="Popular Investments" data={products_data.popularProducts} loading={products_loading} />
      <Categories title="Recommended Investments" data={products_data.recommendedProducts} loading={products_loading} />
    </>
  );
};

export default Home;
