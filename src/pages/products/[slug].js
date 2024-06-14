import React from 'react';
import Head from 'next/head';
import Categories from '../../components/atoms/categories';
import ProductDetail from '../../components/atoms/productDetail';
import Amenities from '../../components/atoms/amenities';
import { images } from '..';
import productService from '@/services/productService';
import Toast from '@/components/molecules/Toast';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '@/components/atoms/Loader';

const ProductDetails = ({ userData }) => {
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleProductDetail(userData) {
    try {
      setIsLoading(true);
      const res = await productService.getProductDetail(userData);
      setProductData(res.data);
    } catch (error) {
      Toast({
        type: 'error',
        message: error.message,
      });
    } finally {
      setIsLoading(false);
    }
    return null;
  }
  useEffect(() => {
    handleProductDetail(userData);
  }, [userData]);
console.log(productData?.product.media[0].split('').slice(-3).join(''));
  return (
    <>
      <Head>
        <title>{productData?.productName}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <>
        <ProductDetail
          loading={isLoading}
          data={productData?.product}
          SellerData={productData?.product?.userId}
          setProductData={setProductData}
        />
        <Amenities data={productData?.product} loading={isLoading} />
        <Categories data={productData?.otherProducts} loading={isLoading} title="Seller’s Other Products" />
      </>
    </>
  );
};

export default ProductDetails;

export async function getServerSideProps({ params }) {
  const slug = params?.slug;
  console.log(params?.slug);
  return {
    props: {
      userData: slug,
    },
  };
}
