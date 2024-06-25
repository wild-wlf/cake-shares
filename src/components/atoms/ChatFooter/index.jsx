import React from 'react';
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
import { sendDirectMessage, sendComMsg } from '@/helpers/socketConnection/socketConnection';

const ChatFooter = ({ userInfo, type, productName, productId }) => {
  const [form] = useForm();
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));

  const handleSubmit = ({ message }) => {
    if (type === 'private') {
      sendDirectMessage({
        author: user?._id,
        receiver: userInfo?._id,
        content: message,
      });
    }

    if (type === 'community') {
      sendComMsg({
        author: user?._id,
        content: message,
        productName,
        productId,
        productOwnerId: userInfo?._id,
      });
    }
    form.setFieldsValue({ message: '' });
    form.setFieldsError({ message: { message: '' } });
  };

  return (
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
            <Image src={PollIcon} alt="PollIcon" width={14} height={14} />
            <Image src={LinkIcon} alt="LinkIcon" width={14} height={14} />
            <Image src={GalleryIcon} alt="GalleryIcon" width={14} height={14} />
          </div>
        </div>
        <Button htmlType="submit" className="send-icon">
          <Image src={SendIcon} alt="sendIcon" width={17} height={17} />
        </Button>
      </ChatFooterWrapper>
    </Form>
  );
};

export default ChatFooter;
