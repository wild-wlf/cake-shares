import React from 'react';
import { ChatBody, ChatFooter, ChatHeader, ChatWrapper } from './Chat.style';
import Image from 'next/image';
import Pic from '../../../_assets/seller-img.png';
import SendIcon from '../../../_assets/send-icon.svg';
import LinkIcon from '../../../_assets/link-icon.svg';
import MicIcon from '../../../_assets/mic-icon.svg';
import PollIcon from '../../../_assets/poll-icon.svg';
import GalleryIcon from '../../../_assets/gallery-icon.svg';
const Chat = () => {
  return (
    <ChatWrapper>
      <div className="chat-div">
        <ChatHeader>
          <Image src={Pic} alt="profilePic" width={40} height={40} />
          <div>
            <h6>Logan Paulson</h6>
            <span>You & Logan Paulson</span>
          </div>
        </ChatHeader>
        <ChatBody></ChatBody>
        <ChatFooter>
          <div className="input-wrapper">
            <div className="input-div">
              <Image src={MicIcon} alt="PollIcon" width={14} height={14} />
              <input placeholder="Type your message..." />
            </div>
            <div className="icons-div">
              <Image src={PollIcon} alt="PollIcon" width={14} height={14} />
              <Image src={LinkIcon} alt="LinkIcon" width={14} height={14} />
              <Image src={GalleryIcon} alt="GalleryIcon" width={14} height={14} />
            </div>
          </div>
          <div className="send-icon">
            <Image src={SendIcon} alt="sendIcon" width={19} height={19} />
          </div>
        </ChatFooter>
      </div>
    </ChatWrapper>
  );
};

export default Chat;
