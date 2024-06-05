import React from 'react';
import { StyledChatMedia } from './ChatMedia.styles';
import chatIconMedia from '../../../../_assets/chatIconMedia.svg';
import Image from 'next/image';
const ChatMedia = () => {
  return (
    <StyledChatMedia>
      <div className="fakeBefore">
        <Image src={chatIconMedia} alt="chatIconMedia" />
      </div>
    </StyledChatMedia>
  );
};

export default ChatMedia;
