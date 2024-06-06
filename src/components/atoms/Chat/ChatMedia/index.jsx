import React from 'react';
import { StyledChatMedia } from './ChatMedia.styles';
import chatIconMedia from '../../../../_assets/chatIconMedia.svg';
import Image from 'next/image';
import Attachments from '../../Attachments';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/components/Context/authContext';
import profileplaceHolder from '../../../../_assets/profileplaceHolder.jpg';
const ChatMedia = ({ userInfo }) => {
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));
  return (
    <StyledChatMedia>
      <div className="fakeBefore">
        <Image src={chatIconMedia} alt="chatIconMedia" />
      </div>
      <strong className="title">Private Chat</strong>
      <div className="chat-between">
        <div className="col">
          <div className="image-warp">
            <Image
              src={userInfo?.profilePicture ? userInfo?.profilePicture : profileplaceHolder}
              alt="profilePicture"
              width={80}
              height={80}
            />
          </div>
          <label className="userName">{userInfo?.fullName}</label>
          <span>{userInfo?.sellerType} Seller</span>
        </div>
        <div className="col">
          <div className="image-warp">
            <Image
              src={user?.profilePicture ? user?.profilePicture : profileplaceHolder}
              alt="profilePicture"
              width={80}
              height={80}
            />
          </div>
          <label className="userName">{user?.fullName}</label>
          <span>Me</span>
        </div>
      </div>
      <Attachments />
    </StyledChatMedia>
  );
};

export default ChatMedia;
