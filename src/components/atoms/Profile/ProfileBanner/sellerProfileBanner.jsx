import React from "react";
import { StyledProfileBanner } from "./ProfileBannerSeller.styles";

const SellerProfileBanner = ({
  title = "Cakeshares",
  image,
}) => {
  return (
    <>
      <StyledProfileBanner $image={image}>
        <strong className="title">{title}</strong>
      </StyledProfileBanner>
    </>
  );
};

export default SellerProfileBanner;
