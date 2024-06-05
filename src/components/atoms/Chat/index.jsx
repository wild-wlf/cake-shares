import React from 'react';
import { ChatBody, ChatWrapper } from './Chat.style';

import ChatHeader from '../ChatHeader';
import ChatFooter from '../ChatFooter';
import ChatMessage from './ChatMessage';

const Chat = ({ userInfo }) => {
  console.log('userInfo', userInfo);
  const chatMessages = [
    {
      text: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration',
      time: 'Yesterday, 12:29 PM',
    },
    {
      text: 'The Points of Using Lorem Ipsum',
      time: 'Yesterday, 12:29 PM',
    },
    {
      text: 'The Points of Using Lorem Ipsum The Points of Using Lorem Ipsum',
      time: 'Yesterday, 12:29 PM',
    },
  ];

  return (
    <ChatWrapper>
      <div className="chatWrapper">
        <ChatHeader userInfo={userInfo} />
        <ChatBody>
          <div className="messages-holder">
            {chatMessages?.map((item, index) => (
              <ChatMessage
                key={index}
                type="send"
                message={item.text}
                time={index === chatMessages.length - 1 && item?.time}
                showImage={index === chatMessages.length - 1}
              />
            ))}
          </div>
          <div className="messages-holder">
            {chatMessages?.map((item, index) => (
              <ChatMessage
                key={index}
                type="seen"
                message={item.text}
                time={index === chatMessages.length - 1 && item?.time}
                showImage={index === chatMessages.length - 1}
              />
            ))}
          </div>
        </ChatBody>
        <ChatFooter />
      </div>
    </ChatWrapper>
  );
};

export default Chat;
