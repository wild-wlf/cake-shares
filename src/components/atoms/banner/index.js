import React from "react";
import Image from "next/image";
import { BannerWrapper } from "./banner.style";
import banner from "../../../pages/_assets/banner-background.png";

const index = () => {
  return (
    <BannerWrapper image={banner}>
      <div className="description">
        <span>Turkish Government, House Bonds!</span>
      </div>
    </BannerWrapper>
  );
};

export default index;
