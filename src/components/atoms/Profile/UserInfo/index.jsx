import React, { useContext } from "react";
import { ProfileWrapper, StyledUserInfo } from "./UserInfo.styles";
import userImage from "../../../../_assets/userProfile.png";
import popular from "../../../../_assets/popular.svg";
import PropertyIcon from "../../../../_assets/PropertyIcon.svg";
import VentureIcon from "../../../../_assets/VentureIcon.svg";
import Image from "next/image";
import KycLevel from "../../KYC/KycLevel";
import { KycContext } from "@/components/Context/KycContext";
const UserInfo = () => {
  const { kycLevel, setKycLevel, checkKycLevel } = useContext(KycContext);
  console.log(checkKycLevel);
  return (
    <StyledUserInfo>
      <div className="userInfo">
        <ProfileWrapper>
          <Image src={userImage} alt="userImage" width={170} height={250} />
        </ProfileWrapper>
        <div className="textWrapper">
          <strong className="name">Alex Mertiz</strong>
          <div className="discreption">
            <span className="active">CakeShare Buyer </span>
            <span className="addbefore"> Member since Feb 15, 2024</span>
          </div>
        </div>
        <div className="textWrapper addbefore">
          <span className="categoriesText">My Investments in Categories:</span>
          <ul className="categoriesWrapper">
            <li className="categoriesList">
              <Image src={popular} alt="popular" />
              Popular
            </li>
            <li className="categoriesList">
              <Image src={PropertyIcon} alt="PropertyIcon" />
              Properties
            </li>
            <li className="categoriesList">
              <Image src={VentureIcon} alt="VentureIcon" />
              Ventures
            </li>
          </ul>
        </div>
      </div>
      <div className="kycWrapper">
        <div className="headingWrapper">
          <strong className="headingText">My KYC Level</strong>
          <strong className="headingText">{kycLevel - 1}</strong>
        </div>
        <div className="updgradeKyc">
          <KycLevel level={kycLevel} />
          <span className="discreption" onClick={checkKycLevel}>
            Upgrade KYC
          </span>
        </div>
      </div>
    </StyledUserInfo>
  );
};

export default UserInfo;
