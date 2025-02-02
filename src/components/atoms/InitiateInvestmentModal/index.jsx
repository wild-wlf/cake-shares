import React, { useState } from 'react';
import Field from '../Field';
import Form, { useForm } from '@/components/molecules/Form';
import Button from '../Button';
import { InvestmentModalWrapper } from './InitiateInvestmentModal.style';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import { convertToCurrencyFormat } from '@/helpers/common';
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
  origin = 'productPage',
  setCompleteData
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
      if (origin === 'productPage') {
        setProductData?.(prev => ({
          ...prev,
          product: {
            ...prev.product,
            valueRaised: raisedValue,
          },
        }));
      } else {
        setCompleteData(raisedValue)
      }

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

  let remainingInvestAmount;
  if (valueRaised > 0) {
    remainingInvestAmount = parseFloat(assetValue) - parseFloat(valueRaised);
  }

  return (
    <InvestmentModalWrapper>
      <div>
        <span className="description">Please fill up the details to proceed.</span>
      </div>
      <Form form={form} onSubmit={onSubmit}>
        <div className="current-wallet">
          Current Wallet Balance: <span>{convertToCurrencyFormat(user?.wallet) || 0}</span>
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
                transform: value => Number(value) > Number(assetValue) - Number(valueRaised),
                message: 'You cannot exceed Investment Amount.',
              },
              {
                transform: value => Number(value) > (user?.wallet ?? 0),
                message: 'You cannot exceed your Wallet Amount.',
              },
              {
                transform: value => {
                  if (remainingInvestAmount) {
                    if (remainingInvestAmount < minInvestValue) {
                      if (value <= remainingInvestAmount) return;
                      return Number(remainingInvestAmount);
                    } else {
                      if (value >= minInvestValue) return;
                      return minInvestValue;
                    }
                  } else {
                    if (value < minInvestValue) {
                      return value;
                    }
                  }
                },
                message: `Minimum Investment Amount is $${remainingInvestAmount < minInvestValue ? Number(remainingInvestAmount) : minInvestValue
                  }`,
              },
              {
                transform: value => (remainingInvestAmount > assetValue ? assetValue : ''),
                message: `Maximum Investment Amount is ${convertToCurrencyFormat(assetValue)}`,
              },

              {
                pattern: /^(?!0+(\.0+)?$)(0|[1-9]\d{0,6})(\.\d{1,2})?$/,
                message: 'Please enter a valid limit between 0.01 and 9999999, with up to 2 decimal places',
              },
            ]}>
            <Field />
          </Form.Item>
          <div className="minInvest">
            Minimum Investment Amount is $
            {remainingInvestAmount < minInvestValue ? Number(remainingInvestAmount) : minInvestValue}
          </div>
        </div>

        {valueRaised > 0 && (
          <>
            <span className="text-wrapper">Remaining Investment Amount ${remainingInvestAmount.toFixed(2)}</span>
          </>
        )}

        <div className="text-wrapper">
          You will own <span>{ownershipPercentage}%</span>
          {`of the asset, valued at a total of `}
          {convertToCurrencyFormat(assetValue)}.
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
