import React from 'react';
import { ChatBody, ChatWrapper } from './Chat.style';

import ChatHeader from '../ChatHeader';
import ChatFooter from '../ChatFooter';
import ChatMedia from './ChatMedia';

const Chat = ({ userInfo }) => {
  console.log('userInfo', userInfo);
  return (
    <ChatWrapper>
      <div className="chatWrapper">
        <ChatHeader userInfo={userInfo} />
        <ChatBody></ChatBody>

        <ChatFooter />
      </div>
      <ChatMedia />
    </ChatWrapper>
  );
};

export default Chat;
