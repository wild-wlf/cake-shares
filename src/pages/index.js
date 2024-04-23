import React from "react";
import TopBar from "../common/TopBar";
import Banner from "../components/atoms/banner";
import Categories from "../components/atoms/categories";
import CategoriesBar from "../components/atoms/categoriesbar";
import CenterModal from "@/components/atoms/Modal/CenterModal";
import KycBuyerLevelOne from "@/components/atoms/KYC/KYCBuyer";
import KycBuyerLevelTwo from "@/components/atoms/KYC/KYCBuyerTwo";

const index = () => {
  return (
    <>
      <Banner />
      <CategoriesBar />
      <Categories />
      <Categories />
      {/* <CenterModal open={true} width="688" title="Upgrade to KYC Level 1">
        <KycBuyerLevelOne />
      </CenterModal> */}
      <CenterModal open={true} width="688" title="Upgrade to KYC Level 2">
        <KycBuyerLevelTwo />
      </CenterModal>
    </>
  );
};

export default index;
