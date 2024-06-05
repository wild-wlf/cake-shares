import Image from 'next/image';
import React from 'react';
import { ChatHeaderWrapper } from './ChatHeader.style';
import Pic from '../../../_assets/seller-img.png';

const ChatHeader = ({ userInfo }) => {
  return (
    <ChatHeaderWrapper>
      {userInfo?.profilePicture ? (
        <Image src={userInfo?.profilePicture} alt="profilePic" width={40} height={40} />
      ) : (
        <Image src={Pic} alt="profilePic" width={40} height={40} />
      )}
      <div>
        <h6>{userInfo.fullName}</h6>
        <span>You & Logan Paulson</span>
      </div>
    </ChatHeaderWrapper>
  );
};

export default ChatHeader;
