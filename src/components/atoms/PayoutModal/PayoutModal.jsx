import React from 'react';

import Form, { useForm } from '@/components/molecules/Form';
import Button from '@/components/atoms/Button';
import { Container } from './styles';
import Field from '../Field';
import { convertToCurrencyFormat } from '@/helpers/common';
import Toast from '@/components/molecules/Toast';
import paymentService from '@/services/paymentService';

const PayoutModal = ({ currentAmount }) => {
  const [form] = useForm();

  const submitHandler = async value => {
    try {
      const response = await paymentService.requestPayout({ amount: value.amount });
      console.log(response);
      if (response.success) {
        Toast({ type: 'success', message: response.message });
      } else {
        Toast({ type: 'error', message: response.message });
      }
    } catch (error) {
      Toast({ type: 'error', message: error.message });
    }
  };

  return (
    <Container>
      <Form form={form} onSubmit={submitHandler}>
        <div className="feildContainer">
          <div className="wrapper">
            <Form.Item
              label="Amount"
              type="input"
              rounded
              sm
              name="amount"
              placeholder="$100"
              rules={[
                {
                  required: true,
                  message: 'Amount is required',
                },
                {
                  transform: value => Number(value) > Number(currentAmount),
                  message: 'You cannot exceed from your wallet amount.',
                },
                {
                  pattern: /^\d+(\.\d+)?$/,
                  message: 'Please enter valid number',
                },
              ]}>
              <Field />
            </Form.Item>
          </div>
        </div>
        <span className="payoutNote">
          Make your your Amount will not be greater than you {convertToCurrencyFormat(currentAmount)} current wallet
          amount
        </span>
        <Button width={'170'} height={'40px'} rounded sm btntype="primary" htmlType={'submit'}>
          Confirm
        </Button>
      </Form>
    </Container>
  );
};

export default PayoutModal;
