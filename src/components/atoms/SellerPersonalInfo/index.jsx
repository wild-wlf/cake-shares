import React from "react";
import { StyledSellerPersonalInfo } from "./SellerPersonalInfo.styles";
import personImage from "../../../_assets/person-icon.svg";
import userNameImage from "../../../_assets/user-name-icon.svg";
import emailAddressImage from "../../../_assets/email-address-icon.svg";
import Image from "next/image";

const SellerPersonalInfo = () => {
  const personalInfoData = [
    {
      image: personImage,
      title: "Full Name",
      text: "Logan Paulson",
    },
    {
      image: userNameImage,
      title: "Username",
      text: "logan123",
    },
    {
      image: emailAddressImage,
      title: "Email Address",
      text: "loganpa123@gmail.com",
    },
  ];
  const finentialInfoData = [
    {
      image: personImage,
      title: "42",
      text: "Ongoing Products   ",
    },
    {
      image: userNameImage,
      title: "$2,653,000",
      text: "Total Return Made",
    },
  ];
  return (
    <StyledSellerPersonalInfo>
      <div className="section">
        <span className="heading">Personal Information:</span>
        <div className="col-holder">
          {personalInfoData?.map((item, index) => (
            <div className="col" key={index}>
              <div className="img-holder">
                <Image src={item.image} alt="personImage" />
              </div>
              <div>
                <span className="title">{item.title}</span>
                <span className="text">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section">
        <span className="heading">Finential Information:</span>
        <div className="col-holder">
          {finentialInfoData?.map((item, index) => (
            <div className="col " key={index}>
              <div className="img-holder">
                <Image src={item.image} alt="personImage" />
              </div>
              <div>
                <span className="title">{item.title}</span>
                <span className="text">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledSellerPersonalInfo>
  );
};

export default SellerPersonalInfo;
