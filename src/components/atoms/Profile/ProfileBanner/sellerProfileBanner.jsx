import React, { useState } from "react";
import editIcon from "../../../../_assets/editIcon.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "@/components/Context/authContext";
import { StyledProfileBanner } from "./ProfileBannerSeller.styles";

const SellerProfileBanner = ({
  title = "Master the World of NFT’s!",
  type = "Buyer",
}) => {
  const [bannerImg, setBannerImg] = useState(null);

  const router = usePathname();

  return (
    <>
      <StyledProfileBanner $image={bannerImg}>
        <strong className="title">{title}</strong>
      </StyledProfileBanner>
    </>
  );
};

export default SellerProfileBanner;
