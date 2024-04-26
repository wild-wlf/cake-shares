import React, { useState } from "react";
import { StyledProfileBanner } from "./ProfileBanner.styles";
import editIcon from "../../../../_assets/editIcon.svg";
import Image from "next/image";

const ProfileBanner = () => {
  const [bannerImg, setBannerImg] = useState(null);
  function handleBannerImg(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setBannerImg(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
  return (
    <>
      <StyledProfileBanner $image={bannerImg}>
        <strong className="title">Master the World of NFT’s!</strong>
        <button type="button">
          <input
            type="file"
            id="bannerImg"
            accept="image/*"
            onChange={handleBannerImg}
          />
          <label htmlFor="bannerImg">
            <span className="rounded-icon">
              <Image src={editIcon} alt="editIcon" />
            </span>
            Change Cover Banner
          </label>
        </button>
      </StyledProfileBanner>
    </>
  );
};

export default ProfileBanner;
