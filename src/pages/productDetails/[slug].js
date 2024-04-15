import TopBar from "@/pages/common/TopBar";
import React from "react";
import ProductDescription from "../../components/atoms/productDescription";

const ProductDetails = ({ userData }) => {
  return (
    <>
      <TopBar />
      <ProductDescription />
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
