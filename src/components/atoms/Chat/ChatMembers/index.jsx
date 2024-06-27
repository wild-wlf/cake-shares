import React from 'react';
import { ChatMembersWrapper } from './ChatMembers.style';
import ProfilePic from '../../../../_assets/seller-img.png';
import Image from 'next/image';
import { HiOutlineStatusOffline, HiOutlineStatusOnline } from 'react-icons/hi';

const ChatMembers = ({ channelReceivers, onlineUsers }) => {
  return (
    <ChatMembersWrapper>
      {channelReceivers?.map((data, index) => (
        <div key={index}>
          <div className="infoWrapper">
            <Image src={data?.profilePicture || ProfilePic} alt="profilePic" />
            <div className="info">
              <h6>{data?.fullName || data?.username}</h6>
              <span>Buyer</span>
            </div>
          </div>
          <span className={data?.online ? 'online' : 'offline'}>
            {onlineUsers?.find(_ => _?.id === data?._id) ? <HiOutlineStatusOnline /> : <HiOutlineStatusOffline />}
          </span>
        </div>
      ))}
    </ChatMembersWrapper>
  );
};

export default ChatMembers;
