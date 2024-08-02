import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ChatBody, ChatWrapper } from './Chat.style';
import ChatHeader from '../ChatHeader';
import ChatFooter from '../ChatFooter';
import ChatMessage from './ChatMessage';
import ChatMedia from './ChatMedia';
import { RiMenu3Fill } from 'react-icons/ri';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import Loader from '../Loader';
import { LoaderStyled } from '../Loader/Loader.styles';
import { updateChatIfActive } from '@/helpers/socketConnection/comMsgHandlers';
import notificationService from '@/services/notificationservice';
import { removeSpaces } from '@/helpers/common';
import Pole from './Pole';

const CommunityChat = ({ userInfo, type, productName, productId }) => {
  const [chatMessages, setChatMessages] = useState([]);
  const { user, fetch } = useContextHook(AuthContext, v => ({
    user: v.user,
    fetch: v.fetch,
  }));
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    itemsPerPage: 10,
    channelName: `${type === 'community' ? 'com' : 'stake'}_${removeSpaces(productName)}_${productId}`,
    type,
  });
  const chatBoxRef = useRef(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [chatLoading, setChatLoading] = useState(true);
  const [moreMsgLoading, setMoreMsgLoading] = useState(false);
  const [channelReceivers, setChannelReceivers] = useState([]);

  const { messages_loading, messages_data } = notificationService.GetAllCommunityConversationMessages(
    searchQuery,
    fetch,
  );

  useEffect(() => {
    if (messages_data?.messages?.length > 0) {
      setChatMessages(prev => [...messages_data?.messages, ...prev]);
      const lastMessage = messages_data?.messages[messages_data?.messages?.length - 1];
      setChannelReceivers([lastMessage, { ...lastMessage?.author }]);
      setMoreMsgLoading(false);
    }
  }, [messages_data]);

  useEffect(() => {
    setChatLoading(chatMessages?.length > 0 ? false : messages_loading);
  }, [messages_loading]);

  const handleScrollToBottom = () => {
    if (chatBoxRef?.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleScrollToBottom();
    }, 300);
  }, []);

  useEffect(() => {
    window.addEventListener('com_message_history', event => {
      updateChatIfActive({
        ...event.detail,
        user,
        setChatMessages,
      });
      handleScrollToBottom();
    });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('com_message_history', () => {});
    };
  }, []);

  useEffect(() => {
    window.addEventListener('online_users', event => {
      setOnlineUsers(event.detail);
    });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('online_users', () => {});
    };
  }, []);

  const onScrolledToTop = e => {
    if (e.target.scrollTop === 0 && chatMessages?.length < messages_data?.totalItems && messages_data?.totalItems > 0) {
      setSearchQuery(prev => ({ ...prev, ['page']: prev?.page + 1 }));
      setMoreMsgLoading(true);
    }
  };

  return (
    <ChatWrapper>
      <div className="chatWrapper">
        <ChatHeader userInfo={userInfo} onlineUsers={onlineUsers} type={type} productName={productName} />
        <ChatBody ref={chatBoxRef} onScroll={onScrolledToTop}>
          {moreMsgLoading && (
            <div
              css={`
                display: flex;
                align-items: center;
                justify-content: center;
              `}>
              <LoaderStyled noHeight />
            </div>
          )}
          {chatLoading ? (
            <div
              css={`
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
              `}>
              <Loader />
            </div>
          ) : (
            chatMessages?.map((item, index) =>
              item?.isPool ? (
                <Pole
                  type={item?.author?._id === user?._id ? 'seen' : 'send'}
                  time={item?.created_at}
                  key={index}
                  question={item?.pool?.question}
                  options={item?.pool?.options}
                  allow_multiple={item?.pool?.allow_multiple}
                  receivers={item?.receivers}
                  showImage={item?.author?.profilePicture}
                  readBy={item?.readBy?.length >= item?.receivers?.length}
                  messageId={item?._id}
                  author={item?.author}
                />
              ) : (
                <ChatMessage
                  key={index}
                  type={item?.author?._id === user?._id ? 'seen' : 'send'}
                  message={item.content}
                  time={item?.created_at}
                  showImage={item?.author?.profilePicture}
                  readBy={item?.readBy?.length >= item?.receivers?.length}
                  messageId={item?._id}
                  receivers={item?.receivers}
                  group
                />
              ),
            )
          )}
        </ChatBody>
        <ChatFooter userInfo={userInfo} type={type} productName={productName} productId={productId} />
      </div>
      <ChatMedia userInfo={userInfo} type={type} onlineUsers={onlineUsers} channelReceivers={channelReceivers} />
      <div className="hamburger" onClick={() => document.body.classList.toggle('chat-sidebar-active')}>
        <RiMenu3Fill size={30} />
      </div>
    </ChatWrapper>
  );
};

export default CommunityChat;
