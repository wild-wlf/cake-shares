import React from 'react';
import { StyledSellerPersonalInfo } from './SellerPersonalInfo.styles';
import personImage from '../../../_assets/person-icon.svg';
import userNameImage from '../../../_assets/user-name-icon.svg';
import emailAddressImage from '../../../_assets/email-address-icon.svg';
import Image from 'next/image';

const SellerPersonalInfo = ({ userInfo }) => {
  const personalInfoData = [
    {
      image: personImage,
      title: 'Full Name',
      text: userInfo?.fullName,
    },
    {
      image: userNameImage,
      title: 'Username',
      text: userInfo?.username,
    },
    {
      image: emailAddressImage,
      title: 'Email Address',
      text: userInfo?.email,
    },
  ];
  const finentialInfoData = [
    {
      image: personImage,
      title: '0',
      text: 'Ongoing Products   ',
    },
    {
      image: userNameImage,
      title: '$0',
      text: 'Total Return Made',
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
        <span className="heading">Financial Information:</span>
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
