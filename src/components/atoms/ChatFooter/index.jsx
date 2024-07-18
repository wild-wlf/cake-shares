import React, { useContext, useState, useEffect } from 'react';
import { ChatFooterWrapper } from './ChatFooter.style';
import Image from 'next/image';
import SendIcon from '../../../_assets/send-icon.svg';
import LinkIcon from '../../../_assets/link-icon.svg';
import MicIcon from '../../../_assets/mic-icon.svg';
import PollIcon from '../../../_assets/poll-icon.svg';
import GalleryIcon from '../../../_assets/gallery-icon.svg';
import Form, { useForm } from '@/components/molecules/Form';
import Button from '../Button';
import Field from '../Field';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import {
  sendDirectMessage,
  sendComMsg,
  startChat,
  endChat,
  joinGroupChat,
  leaveGroupChat,
} from '@/helpers/socketConnection/socketConnection';
import CreatePollModal from '../Chat/CreatePollModal';
import CenterModal from '../Modal/CenterModal';
import { removeSpaces } from '@/helpers/common';

const ChatFooter = ({ userInfo, type, productName, productId, receivers }) => {
  const [form] = useForm();
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = ({ message }) => {
    if (type === 'private') {
      sendDirectMessage({
        author: user?._id,
        receiver: userInfo?._id,
        content: message,
      });
    }

    if (type === 'community' || type === 'stake') {
      const channelName = `${type === 'community' ? 'com' : 'stake'}_${removeSpaces(productName)}_${productId}`;
      sendComMsg({
        author: user?._id,
        content: message,
        productName,
        productId,
        productOwnerId: userInfo?._id,
        type,
        user_type: 'user',
        channelName,
        receivers,
      });
    }
    form.setFieldsValue({ message: '' });
    form.setFieldsError({ message: { message: '' } });
  };

  useEffect(() => {
    const handleStartChat = () => {
      if (user?._id && userInfo?._id) {
        startChat({ author: user._id, receiver: userInfo._id });
      }
    };

    const handleEndChat = () => {
      if (user?._id && userInfo?._id) {
        endChat({ author: user._id, receiver: userInfo._id });
      }
      if (type === 'community' || type === 'stake') {
        const channelName = `${type === 'community' ? 'com' : 'stake'}_${removeSpaces(productName)}_${productId}`;
        leaveGroupChat({ userId: user._id, groupId: channelName });
      }
    };

    window.addEventListener('beforeunload', handleEndChat);
    window.addEventListener('unload', handleEndChat);

    // handleStartChat();
    // Check type and initiate startChat for specific types
    if (type === 'community' || type === 'stake') {
      const channelName = `${type === 'community' ? 'com' : 'stake'}_${removeSpaces(productName)}_${productId}`;
      joinGroupChat({ userId: user._id, groupId: channelName });
    } else {
      handleStartChat();
    }

    return () => {
      handleEndChat();
      window.removeEventListener('beforeunload', handleEndChat);
      window.removeEventListener('unload', handleEndChat);
    };
  }, []);

  return (
    <>
      <Form form={form} onSubmit={handleSubmit}>
        <ChatFooterWrapper>
          <div className="input-wrapper">
            <div className="input-div">
              <Image src={MicIcon} alt="PollIcon" width={14} height={14} />
              <Form.Item
                type="text"
                name="message"
                sm
                rules={[{ required: true, message: 'Cannot Send Empty Message' }]}
                placeholder="Enter Message">
                <Field maxLength={256} autocomplete="off" />
              </Form.Item>
            </div>
            <div className="icons-div">
              {(type === 'community' || type === 'stake') && (
                <Image src={PollIcon} alt="PollIcon" width={14} height={14} onClick={() => setOpenModal(true)} />
              )}
              <Image src={LinkIcon} alt="LinkIcon" width={14} height={14} />
              <Image src={GalleryIcon} alt="GalleryIcon" width={14} height={14} />
            </div>
          </div>
          <Button htmlType="submit" className="send-icon">
            <Image src={SendIcon} alt="sendIcon" width={17} height={17} />
          </Button>
        </ChatFooterWrapper>
      </Form>

      <CenterModal zIndex={9999} open={openModal} setOpen={setOpenModal} width="688" title="Create Pool">
        <CreatePollModal
          onClose={() => setOpenModal(false)}
          userInfo={userInfo}
          productName={productName}
          productId={productId}
          user={user}
          type={type}
        />
      </CenterModal>
    </>
  );
};

export default ChatFooter;
