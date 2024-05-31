import React from "react";
import Categories from "../../components/atoms/categories";
import ProductDetail from "../../components/atoms/productDetail";
import Amenities from "../../components/atoms/amenities";
import { images } from "..";
import productService from "@/services/productService";
import Toast from "@/components/molecules/Toast";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "@/components/atoms/Loader";

const ProductDetails = ({ userData }) => {
  const [productData, setProductData] = useState(null);
  const [userProfileData, setUserProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleProductDetail(userData) {
    try {
      setIsLoading(true);
      const res = await productService.getProductDetail(userData);
      setProductData(res.data.product);
      setUserProfileData(res.data.product.userId);
    } catch (error) {
      Toast({
        type: "error",
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

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ProductDetail data={productData} SellerData={userProfileData} />
          <Amenities data={productData} />
          <Categories arr={images} />
        </>
      )}
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
