import React, { useState } from 'react';
import { ProfileWrapper, StyledUserInfo } from './UserInfo.styles';
import popular from '../../../../_assets/popular.svg';
import PropertyIcon from '../../../../_assets/PropertyIcon.svg';
import VentureIcon from '../../../../_assets/VentureIcon.svg';
import chatIcon from '../../../../_assets/chat-icon.svg';
import Image from 'next/image';
import Button from '../../Button';
import profile from '../../../../_assets/profileplaceHolder.jpg';
import { formatDateWithSuffix } from '@/helpers/common';
import CenterModal from '../../Modal/CenterModal';
import Chat from '../../Chat';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import { NoRecord } from '../../categories/categories.style';
import Slider from 'react-slick';

const SellerInfo = ({ userInfo, userCategories }) => {
  const [chat, setChat] = useState(false);
  const { isLoggedIn } = useContextHook(AuthContext, v => ({
    isLoggedIn: v.isLoggedIn,
  }));
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <>
      <CenterModal
        zIndex={9999}
        open={chat}
        setOpen={setChat}
        width="1339"
        title={`${userInfo?.fullName ? userInfo?.fullName : userInfo?.username}'s Chat`}>
        <Chat userInfo={userInfo} type="private" />
      </CenterModal>
      <StyledUserInfo>
        <div className="userInfo">
          <ProfileWrapper>
            <Image
              src={userInfo?.profilePicture ? userInfo?.profilePicture : profile}
              alt="userImage"
              width={170}
              height={170}
            />
          </ProfileWrapper>
          <div className="textWrapper">
            <strong className="name">{userInfo?.fullName || userInfo?.username}</strong>
            <div className="discreption">
              <span className="active">CakeShare {userInfo?.sellerType} Seller</span>
              {userInfo?.created_at && (
                <span className="addbefore">Member since {formatDateWithSuffix(userInfo?.created_at)}</span>
              )}
            </div>
          </div>
          <div className="textWrapper addbefore">
            <span className="categoriesText">Seller’s Product Top Categories:</span>
            <ul className="categoriesWrapper">
              {userCategories && userCategories?.length > 0 ? (
                userCategories?.map(ele => (
                  <>
                    <li key={ele?.name} className="categoriesList">
                      <figure className="img-holder">
                        <Image src={ele?.icon || popular} alt="popular" width={20} height={20} />
                      </figure>
                      <span>{ele?.name}</span>
                    </li>
                  </>
                ))
              ) : (
                <NoRecord>No Category Found.</NoRecord>
              )}
            </ul>
          </div>
        </div>
        <Button
          disabled={!isLoggedIn}
          type="primary"
          md
          rounded
          width="200"
          onClick={() => {
            setChat(true);
          }}>
          <span className="username">Chat with {userInfo?.fullName ? userInfo?.fullName : userInfo?.username}</span>
          <Image src={chatIcon} alt="chatIcon" />
        </Button>
      </StyledUserInfo>
    </>
  );
};

export default SellerInfo;
