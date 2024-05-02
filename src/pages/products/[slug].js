import React from "react";
import Categories from "../../components/atoms/categories";
import ProductDetail from "../../components/atoms/productDetail";
import ProductDescription from "../../components/atoms/productDescription";
import Amenities from "../../components/atoms/amenities";
import { images } from "..";

const ProductDetails = ({ userData }) => {
  return (
    <>
      <ProductDetail />
      {/* <ProductDescription /> */}
      <Amenities />
      <Categories arr={images} />
    </>
  );
};

export default ProductDetails;

export async function getServerSideProps({ params, res }) {
  const slug = params?.slug;

  return {
    props: {
      userData: slug,
    },
  };
}
