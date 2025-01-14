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
import { updateDirectChatHistoryIfActive } from '@/helpers/socketConnection/chatHandlers';
import notificationService from '@/services/notificationservice';
import Loader from '../Loader';
import { LoaderStyled } from '../Loader/Loader.styles';

const Chat = ({ userInfo, type }) => {
  const [chatMessages, setChatMessages] = useState([]);
  const { user, fetch } = useContextHook(AuthContext, v => ({
    user: v.user,
    fetch: v.fetch,
  }));
  const chatBoxRef = useRef(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    itemsPerPage: 10,
    author: user?._id,
    receiver: userInfo?._id,
    conversationId: '',
  });
  const [chatLoading, setChatLoading] = useState(true);
  const [moreMsgLoading, setMoreMsgLoading] = useState(false);
  const [channelReceivers, setChannelReceivers] = useState([]);

  const { messages_loading, messages_data } = notificationService.GetAllConversationMessages(searchQuery, fetch);

  useEffect(() => {
    if (messages_data?.messages?.length > 0) {
      const lastMessage = messages_data?.messages[messages_data?.messages?.length - 1];
      setChannelReceivers([lastMessage, { ...lastMessage?.author }]);
      setChatMessages(prev => [...messages_data?.messages, ...prev]);
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
    window.addEventListener('direct_chat_history', event => {
      updateDirectChatHistoryIfActive({ ...event.detail, user, userInfo, onlineUsers, setChatMessages });
      handleScrollToBottom();
    });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('direct_chat_history', () => {});
    };
  }, [user, userInfo]);

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
        <ChatHeader userInfo={userInfo} onlineUsers={onlineUsers} type={type} />
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
            chatMessages?.map((item, index) => (
              <ChatMessage
                key={index}
                type={item?.author?._id === user?._id ? 'seen' : 'send'}
                chatType={type}
                message={item.content}
                time={item?.created_at}
                readBy={item?.readBy?.find(_ => _?._id === userInfo?._id)}
                senderId={user?._id}
                messageId={item?._id}
                receiverId={userInfo?._id}
                defaultReaction={item?.reaction}
                showReaction={item?.author?._id !== user?._id ? true : false}
                item={item}
              />
            ))
          )}
        </ChatBody>
        <ChatFooter userInfo={userInfo} type={type} />
      </div>
      <ChatMedia userInfo={userInfo} type={type} onlineUsers={onlineUsers} channelReceivers={channelReceivers} />
      <div className="hamburger" onClick={() => document.body.classList.toggle('chat-sidebar-active')}>
        <RiMenu3Fill size={30} />
      </div>
    </ChatWrapper>
  );
};

export default Chat;
