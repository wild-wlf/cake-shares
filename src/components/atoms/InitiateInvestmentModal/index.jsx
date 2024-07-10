import React, { useState } from 'react';
import Field from '../Field';
import Form, { useForm } from '@/components/molecules/Form';
import Button from '../Button';
import { InvestmentModalWrapper } from './InitiateInvestmentModal.style';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import { formatNumber } from '@/helpers/common';
import walletService from '@/services/walletService';
import Toast from '@/components/molecules/Toast';

const InitiateInvestmentModal = ({
  productId,
  sellerId,
  assetValue,
  minInvestValue,
  setOwnershipPercentage,
  handleCloseModal,
  setProductData,
  valueRaised,
}) => {
  const { user, setPermission } = useContextHook(AuthContext, v => ({
    user: v.user,
    setPermission: v.setPermission,
  }));
  const [isLoading, setIsLoading] = useState(false);
  const [shareAmount, setShareAmount] = useState(0);
  const [form] = useForm();

  const ownershipPercentage = ((shareAmount / assetValue) * 100).toFixed(2);

  const onSubmit = async ({ boughtAmount }) => {
    try {
      setIsLoading(true);
      const payload = {
        userId: user?._id,
        sellerId: sellerId?._id,
        productId,
        boughtAmount,
      };
      const { raisedValue } = await walletService.initiateInvestment(payload);
      setProductData(prev => ({
        ...prev,
        product: {
          ...prev.product,
          valueRaised: raisedValue,
        },
      }));

      setOwnershipPercentage(ownershipPercentage);
      handleCloseModal();
      setPermission(prev => !prev);
    } catch ({ message }) {
      Toast({
        type: 'error',
        message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const remainingInvestAmount = parseFloat(assetValue) - parseFloat(valueRaised);

  return (
    <InvestmentModalWrapper>
      <div>
        <span className="description">Please fill up the details to proceed.</span>
      </div>
      <Form form={form} onSubmit={onSubmit}>
        <div className="current-wallet">
          Current Wallet Balance: <span>${formatNumber(user?.wallet) || 0}</span>
        </div>
        <div className="input-div">
          <Form.Item
            type="number"
            label="Enter Amount"
            name="boughtAmount"
            sm
            rounded
            placeholder="$7,200"
            onChange={e => {
              form.setFieldsValue({
                boughtAmount: e.target.value,
              });
              setShareAmount(parseFloat(e.target.value) || 0);
            }}
            rules={[
              {
                required: true,
                message: 'Please enter Amount!  ',
              },

              {
                transform: value => parseFloat(value) > parseFloat(user?.wallet),
                message: 'You cannot exceed your Wallet Amount!.',
              },
              {
                transform: value => parseFloat(value) > parseFloat(assetValue) - parseFloat(valueRaised),
                message: 'You cannot exceed Investment Amount!.',
              },

              {
                min: minInvestValue,
                message: `Minimum Investment Amount is $${formatNumber(minInvestValue)}`,
              },
              {
                max: assetValue,
                message: `Maximum Investment Amount is $${formatNumber(assetValue)}`,
              },
            ]}>
            <Field />
          </Form.Item>
        </div>
        {valueRaised > 0 && (
          <>
            <span className="text-wrapper">Remaining Investment Amount ${remainingInvestAmount}</span>
          </>
        )}

        <div className="text-wrapper">
          You will own <span>{ownershipPercentage}%</span> of the asset, valued at a total of $
          {formatNumber(assetValue)}.
        </div>
        <div>
          <Button rounded md btntype="primary" loader={isLoading} width="170" htmlType="submit">
            Buy Shares
          </Button>
        </div>
      </Form>
    </InvestmentModalWrapper>
  );
};

export default InitiateInvestmentModal;
