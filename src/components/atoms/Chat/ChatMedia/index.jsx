import React, { useState } from 'react';
import { StyledChatMedia } from './ChatMedia.styles';
import chatIconMedia from '../../../../_assets/chatIconMedia.svg';
import Image from 'next/image';
import Attachments from '../../Attachments';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import profileplaceHolder from '../../../../_assets/profileplaceHolder.jpg';
import MediaSlide from './MediaSlide';
import { TbExternalLink } from 'react-icons/tb';
import CenterModal from '@/components/atoms/Modal/CenterModal';
import ChatMembers from '../ChatMembers';

const ChatMedia = ({ userInfo, type, onlineUsers, channelReceivers }) => {
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));
  const [chatMembers, setChatMembers] = useState(false);

  const getThreeParticipants = () => {
    const receivers = channelReceivers[0]?.receivers?.filter(_ => _?._id !== userInfo?._id);
    if (receivers?.length > 3) {
      receivers?.splice(0, 3);
    }
    return receivers;
  };

  return (
    <>
      <CenterModal open={chatMembers} setOpen={setChatMembers} title="All Chat Members" width="450">
        <ChatMembers
          channelReceivers={channelReceivers[0]?.receivers?.filter(_ => _?._id !== userInfo?._id)}
          user={user}
          onlineUsers={onlineUsers}
        />
      </CenterModal>
      <StyledChatMedia>
        <div className="fakeBefore">
          <Image src={chatIconMedia} alt="chatIconMedia" />
        </div>
        <strong className="title">{type === 'community' || type === 'stake' ? 'Chat Members' : 'Private Chat'}</strong>
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

          {(type === 'community' || type === 'stake') && (
            <div className="community-col">
              <div className="images-wrapper">
                {getThreeParticipants()?.map((item, index) => {
                  return (
                    <Image
                      src={item?.profilePicture || profileplaceHolder}
                      alt="profilePic"
                      width={45}
                      height={45}
                      key={index}
                    />
                  );
                })}
              </div>

              {channelReceivers[0]?.receivers?.filter(receiver => receiver._id !== userInfo?._id).length > 3 && (
                <span
                  onClick={() => {
                    setChatMembers(true);
                  }}>
                  View All <TbExternalLink fontSize={18} />
                </span>
              )}
            </div>
          )}

          {type === 'private' && (
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
