import React, { useMemo } from "react";
import { StyledUserDetail } from "./UserDetail.styles";
import Button from "../../Button";
import { MdModeEdit } from "react-icons/md";
import bankIcon from "../../../../_assets/bankIcon.svg";
import numIcon from "../../../../_assets/numIcon.svg";
import userIcon from "../../../../_assets/userIcon.svg";
import userId from "../../../../_assets/userId.svg";
import userName from "../../../../_assets/userName.svg";
import emailAddress from "../../../../_assets/emailAddress.svg";
import password from "../../../../_assets/password.svg";
import flagIcon from "../../../../_assets/flagIcon.svg";
import countryflgIcon from "../../../../_assets/countryflgIcon.svg";
import Image from "next/image";

const UserDetail = () => {
  return (
    <StyledUserDetail>
      <div className="colWrapper">
        <div className="colHeader">
          <strong className="colTitle">Bank Info:</strong>
          <Button type="primary" rounded sm>
            <MdModeEdit />
            Edit Info
          </Button>
        </div>
        <div className="colBody">
          <div className="col-content">
            <div className="iconWrap">
              <Image src={bankIcon} alt="bankIcon" />
            </div>
            <div className="textWrap">
              <strong className="title">Bank Name</strong>
              <span>Bank of Americe</span>
            </div>
          </div>
          <div className="col-content">
            <div className="iconWrap">
              <Image src={numIcon} alt="numIcon" />
            </div>
            <div className="textWrap">
              <strong className="title">IBAN</strong>
              <span>PK033310084246213</span>
            </div>
          </div>
          <div className="col-content">
            <div className="iconWrap">
              <Image src={userIcon} alt="userIcon" />
            </div>
            <div className="textWrap">
              <strong className="title">SWIFT / BIC Number</strong>
              <span>PK033310084246213</span>
            </div>
          </div>
          <div className="col-content">
            <div className="iconWrap">
              <Image src={userId} alt="userId" />
            </div>
            <div className="textWrap">
              <strong className="title">User ID</strong>
              <span>33445554</span>
            </div>
          </div>
        </div>
      </div>
      <div className="colWrapper">
        <div className="colHeader">
          <strong className="colTitle">Personal Information:</strong>
          <Button type="primary" rounded sm>
            <MdModeEdit />
            Edit Info
          </Button>
        </div>
        <div className="colBody">
          <div className="col-content">
            <div className="iconWrap">
              <Image src={userIcon} alt="userIcon" />
            </div>
            <div className="textWrap">
              <strong className="title">Full Name</strong>
              <span>Alex Mertiz</span>
            </div>
          </div>
          <div className="col-content">
            <div className="iconWrap">
              <Image src={userName} alt="userName" />
            </div>
            <div className="textWrap">
              <strong className="title">Username</strong>
              <span>alex123</span>
            </div>
          </div>
          <div className="col-content">
            <div className="iconWrap">
              <Image src={emailAddress} alt="emailAddress" />
            </div>
            <div className="textWrap">
              <strong className="title">Email Address</strong>
              <span>alex123@gmail.com</span>
            </div>
          </div>
          <div className="col-content">
            <div className="iconWrap">
              <Image src={password} alt="password" />
            </div>
            <div className="textWrap">
              <strong className="title">Password</strong>
              <span>**************</span>
            </div>
          </div>
          <div className="col-content">
            <div className="iconWrap">
              <Image src={flagIcon} alt="flagIcon" />
            </div>
            <div className="textWrap">
              <strong className="title">Country</strong>
              <Image src={countryflgIcon} alt="countryflgIcon" />
              <span>Turkey</span>
            </div>
          </div>
          <div className="col-content">
            <div className="iconWrap">
              <Image src={password} alt="password" />
            </div>
            <div className="textWrap">
              <strong className="title">Date of Birth</strong>
              <span>03/05/2024</span>
            </div>
          </div>
        </div>
      </div>
    </StyledUserDetail>
  );
};

export default UserDetail;
