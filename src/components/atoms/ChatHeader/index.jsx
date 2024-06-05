import Image from 'next/image';
import React from 'react';
import { ChatHeaderWrapper } from './ChatHeader.style';
import Pic from '../../../_assets/seller-img.png';

const ChatHeader = ({ userInfo }) => {
  return (
    <ChatHeaderWrapper>
      <Image src={userInfo?.profilPicture ? userInfo?.profilPicture : Pic} alt="profilePic" width={40} height={40} />
      <div>
        <h6>{userInfo?.fullName}</h6>
        <span>You & {userInfo?.fullName}</span>
      </div>
    </ChatHeaderWrapper>
  );
};

export default ChatHeader;
