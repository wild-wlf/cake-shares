import React from "react";
import Categories from "../../components/atoms/categories";
import ProductDetail from "../../components/atoms/productDetail";
import Amenities from "../../components/atoms/amenities";
import { images } from "..";

const ProductDetails = () => {
  return (
    <>
      <ProductDetail />
      <Amenities />
      <Categories arr={images} />
    </>
  );
};

export default ProductDetails;

export async function getServerSideProps({ params, res }) {
  const slug = params?.slug;
  console.log(slug);
  return {
    props: {
      userData: slug,
    },
  };
}
