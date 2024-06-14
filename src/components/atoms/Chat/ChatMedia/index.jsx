import React, { useState } from 'react';
import { StyledChatMedia } from './ChatMedia.styles';
import chatIconMedia from '../../../../_assets/chatIconMedia.svg';
import ProfilePic from '../../../../_assets/seller-img.png';
import Image from 'next/image';
import Attachments from '../../Attachments';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/components/Context/authContext';
import profileplaceHolder from '../../../../_assets/profileplaceHolder.jpg';
import MediaSlide from './MediaSlide';
import { TbExternalLink } from 'react-icons/tb';
import CenterModal from '@/components/molecules/Modal/CenterModal';
import ChatMembers from '../ChatMembers';

const ChatMedia = ({ userInfo, type, onlineUsers }) => {
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));
  const [chatMembers, setChatMembers] = useState(false);
  return (
    <>
      <CenterModal open={chatMembers} setOpen={setChatMembers} title="All Chat Members" width="450">
        <ChatMembers />
      </CenterModal>
      <StyledChatMedia>
        <div className="fakeBefore">
          <Image src={chatIconMedia} alt="chatIconMedia" />
        </div>
        <strong className="title">{type === 'Community' ? 'Chat Members' : 'Private Chat'}</strong>
        <div className="chat-between">
          <div className="col">
            <div className={`image-warp ${onlineUsers?.find(_ => _?.id === userInfo?._id) ? 'online' : 'offline'}`}>
              <Image
                src={userInfo?.profilePicture ? userInfo?.profilePicture : profileplaceHolder}
                alt="profilePicture"
                width={80}
                height={80}
              />
            </div>
            <label className="userName">{userInfo?.fullName || userInfo?.username}</label>
            <span>{userInfo?.sellerType} Seller</span>
          </div>
          {type === 'Community' ? (
            <div className="community-col">
              <div className="images-wrapper">
                <Image src={ProfilePic} alt="profilePic" width={45} height={45} />
                <Image src={ProfilePic} alt="profilePic" width={45} height={45} />
                <Image src={ProfilePic} alt="profilePic" width={45} height={45} />
              </div>
              <div className="images-wrapper">
                <Image src={ProfilePic} alt="profilePic" width={45} height={45} />
                <Image src={ProfilePic} alt="profilePic" width={45} height={45} />
                <Image src={ProfilePic} alt="profilePic" width={45} height={45} />
              </div>
              <span
                onClick={() => {
                  setChatMembers(true);
                }}>
                View All <TbExternalLink fontSize={18} />
              </span>
            </div>
          ) : (
            <div className="col">
              <div className="image-warp">
                <Image
                  src={user?.profilePicture ? user?.profilePicture : profileplaceHolder}
                  alt="profilePicture"
                  width={80}
                  height={80}
                />
              </div>
              <label className="userName">{user?.fullName || user?.username}</label>
              <span>Me</span>
            </div>
          )}
        </div>
        <MediaSlide />
        <Attachments />
      </StyledChatMedia>
    </>
  );
};

export default ChatMedia;
