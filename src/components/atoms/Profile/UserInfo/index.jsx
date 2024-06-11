import React, { useContext, useEffect, useState } from 'react';
import { ProfileWrapper, StyledUserInfo } from './UserInfo.styles';
import popular from '../../../../_assets/popular.svg';
import PropertyIcon from '../../../../_assets/PropertyIcon.svg';
import VentureIcon from '../../../../_assets/VentureIcon.svg';
import chatIcon from '../../../../_assets/chat-icon.svg';
import Image from 'next/image';
import KycLevel from '../../KYC/KycLevel';
import { KycContext } from '@/components/Context/KycContext';
import { usePathname } from 'next/navigation';
import Button from '../../Button';
import profile from '../../../../_assets/profileplaceHolder.jpg';
import { MdEdit } from 'react-icons/md';
import { convertToFormData } from '@/helpers/common';
import userService from '@/services/userService';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/components/Context/authContext';
import Toast from '@/components/molecules/Toast';
import { format, parseISO } from 'date-fns';
const UserInfo = ({
  userImage,
  type = {
    userType: 'Buyer',
    categories: 'My Investments in Categories:',
  },
  userData,
  categoriesData,
}) => {
  const { kycLevel, setKycLevel, checkKycLevel } = useContext(KycContext);
  const { user, setPermission } = useContextHook(AuthContext, v => ({
    user: v.user,
    setPermission: v.setPermission,
  }));
  const formattedDate = user?.created_at ? format(parseISO(user?.created_at), 'MMM dd, yyyy') : 'N/A';
  const router = usePathname();
  async function handelProfileImage(e) {
    const file = e.target.files[0];
    if (file) {
      let obj = {
        type: 'picture',
        profilePicture: file,
      };
      const data = convertToFormData(obj);
      try {
        await userService.uploadMedia(data, user._id);
        Toast({
          type: 'success',
          message: 'profile updated successfully',
        });
        setPermission(true);
      } catch (error) {
        Toast({
          type: 'error',
          message: error.message,
        });
      }
    }
  }
  return (
    <StyledUserInfo>
      <div className="userInfo">
        dss
        <h1>hamza</h1>
        {type.userType === 'Buyer' && (
          <ProfileWrapper showEffect={type.userType}>
            <input type="file" id="bannerImg" accept=".png , .jpg" onChange={handelProfileImage} />
            <span className="rounded-icon">
              <MdEdit color="var(--white)" size={26} />
            </span>
            {user.profilePicture ? (
              <Image src={user.profilePicture} alt="userImage" width={170} height={250} />
            ) : (
              <Image src={profile} alt="userImage" />
            )}
          </ProfileWrapper>
        )}
        {type.userType === 'Seller' && (
          <ProfileWrapper>
            <Image src={profile} alt="userImage" />
          </ProfileWrapper>
        )}
        <div className="textWrapper">
          <strong className="name">{userData ? userData?.fullName : 'Alex Mertiz'}</strong>
          <div className="discreption">
            <span className="active"> CakeShare {userData?.type ? userData?.type : type.userType}</span>
            <span className="addbefore">Member since {formattedDate}</span>
          </div>
        </div>
        <div className="textWrapper addbefore">
          <span className="categoriesText">{type?.categories}</span>
          <ul className="categoriesWrapper">
            {categoriesData &&
              categoriesData.length > 0 &&
              categoriesData.map((ele, index) => (
                <li key={index} className="categoriesList">
                  <Image src={ele?.icon || popular} alt="popular" />
                  {ele?.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
      {router == '/profile' ? (
        <div className="kycWrapper">
          <div className="headingWrapper">
            <strong className="headingText">My KYC Level</strong>
            <strong className="headingText">{user.kycLevel}</strong>
          </div>
          <div className="updgradeKyc">
            <KycLevel level={user.kycLevel + 1} />
            {user?.kycLevel < 3 && (
              <>
                {!user?.isKycRequested && (
                  <span className="discreption" onClick={checkKycLevel}>
                    Upgrade KYC
                  </span>
                )}
              </>
            )}
          </div>
        </div>
      ) : (
        <Button type="primary" md rounded width="200">
          Chat with Lagan
          <Image src={chatIcon} alt="chatIcon" />
        </Button>
      )}
    </StyledUserInfo>
  );
};

export default UserInfo;
