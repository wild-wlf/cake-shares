import React, { useState } from 'react';
import { ModalContainer, DateContainer, MailContainer } from './DownloadModalStyle';
import Field from '../Field';
import Button from '@/components/atoms/Button';
import userService from '@/services/userService';
import Form, { useForm } from '@/components/molecules/Form';
import Toast from '@/components/molecules/Toast';
import { downloadStatement } from '@/helpers/common';

const DownloadModal = ({ openNext }) => {
  const [searchQuery, setSearchQuery] = useState({
    type: 'all',
    getAll: true,
    startDate: '',
    endDate: '',
  });
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async data => {
    try {
      setIsLoading(true);
      const res = await userService.getAllTransactions({
        ...searchQuery,
        startDate: data?.startDate,
        endDate: data?.endDate,
        getAll: true,
      });
      downloadStatement(res?.transactions, 'Statement');
      openNext();
    } catch ({ message }) {
      Toast({
        type: 'error',
        message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ModalContainer>
      <h3 className="text">Please fill up the details to proceed.</h3>
      <Form form={form} onSubmit={onSubmit}>
        <DateContainer>
          <div className="wrapper">
            <Form.Item
              name="startDate"
              noMargin
              sm
              type="date"
              label="From"
              rules={[
                {
                  required: true,
                  message: 'Start Date is Required',
                },
                {
                  transform: value => new Date(value).setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0),
                  message: 'Start Date cannot be in the Future!',
                },
                {
                  transform: value => new Date(value) > new Date(form.getFieldValue('endDate')),
                  message: `Start Date cannot be greator than end date`,
                },
              ]}>
              <Field />
            </Form.Item>
          </div>
          <div className="wrapper">
            <Form.Item
              name="endDate"
              noMargin
              sm
              type="date"
              label="To"
              rules={[
                {
                  required: true,
                  message: 'End Date is Required',
                },
                {
                  transform: value => new Date(value).setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0),
                  message: 'End Date cannot be in the Future!',
                },
                {
                  transform: value => new Date(value) < new Date(form.getFieldValue('startDate')),
                  message: `End Date cannot be less than start date`,
                },
              ]}>
              <Field />
            </Form.Item>
          </div>
        </DateContainer>
        <MailContainer>
          {/* <div className="wrapper">
            <Form.Item
              label="Email Address"
              type="email"
              rounded
              sm
              name="email"
              placeholder="michelgredes@gmail.com"
              rules={[
                {
                  required: true,
                  message: 'Email is Required',
                },
              ]}>
              <Field />
            </Form.Item>
          </div> */}
        </MailContainer>
        <Button rounded width={'170px'} height={'40px'} sm btntype="primary" htmlType="submit" loader={isLoading}>
          {/* Get Records */}
          Download Statement
        </Button>
      </Form>
    </ModalContainer>
  );
};

export default DownloadModal;
