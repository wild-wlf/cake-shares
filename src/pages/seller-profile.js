import React from "react";
import ProfileBanner from "@/components/atoms/Profile/ProfileBanner";
import UserInfo from "@/components/atoms/Profile/UserInfo";
import Button from "@/components/atoms/Button";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { StyledProfile } from "../components/atoms/Profile/Profile.styles";
import sellerImage from "../_assets/seller-img.png";
import sellerHeroImage from "../_assets/seller-hero-bg.png";
import SellerPersonalInfo from "@/components/atoms/SellerPersonalInfo";
import Categories from "@/components/atoms/categories";


const SellerProfile = () => {
  const usertype = {
    userType: "Seller",
    categories: "Seller’s Product Top Categories:",
  };
  const router = useRouter();

  console.log(user);
  return (
    <StyledProfile>
      <Button
        rounded
        sm
        btntype="blue"
        className="button"
        onClick={() => {
          router.back();
        }}
      >
        <IoIosArrowBack />
        Go Back
      </Button>
      <ProfileBanner
        title="Real Estate Broker Things mate!"
        image={sellerHeroImage}
      />
      <UserInfo userImage={sellerImage} type={usertype} />
      <SellerPersonalInfo />
      <Categories title="Seller’s Other Products" />
      <Categories title="Seller’s Fully Funded Products" />
    </StyledProfile>
  );
};

export default SellerProfile;
