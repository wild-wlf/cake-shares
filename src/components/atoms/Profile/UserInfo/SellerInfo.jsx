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

const SellerInfo = ({ userInfo }) => {
  const [chat, setChat] = useState(false);
  return (
    <>
      <CenterModal zIndex={9999} open={chat} setOpen={setChat} width="1339" title="Logan's Chat">
        <Chat />
      </CenterModal>
      <StyledUserInfo>
        <div className="userInfo">
          {userInfo?.profilePicture ? (
            <ProfileWrapper>
              <Image src={userInfo?.profilePicture} alt="userImage" width={170} height={170} />
            </ProfileWrapper>
          ) : (
            <ProfileWrapper>
              <Image src={profile} alt="userImage" />
            </ProfileWrapper>
          )}

          <div className="textWrapper">
            <strong className="name">{userInfo?.fullName ? userInfo?.fullName : 'Alex Mertiz'}</strong>
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
        <Button
          type="primary"
          md
          rounded
          width="200"
          onClick={() => {
            setChat(true);
          }}>
          Chat with {userInfo?.fullName ? userInfo?.fullName : 'Seller'}
          <Image src={chatIcon} alt="chatIcon" />
        </Button>
      </StyledUserInfo>
    </>
  );
};

export default SellerInfo;
