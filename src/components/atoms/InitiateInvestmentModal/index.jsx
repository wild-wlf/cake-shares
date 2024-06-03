import React, { useState } from "react";
import Field from "../Field";
import Form, { useForm } from "@/components/molecules/Form";
import Button from "../Button";
import { InvestmentModalWrapper } from "./InitiateInvestmentModal.style";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "@/components/Context/authContext";
import { formatNumber } from "@/helpers/common";
import walletService from "@/services/walletService";
import Toast from "@/components/molecules/Toast";

const InitiateInvestmentModal = ({ productId, assetValue, setOwnershipPercentage, handleCloseModal, valueRaised }) => {
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
        productId,
        boughtAmount,
      };
      await walletService.initiateInvestment(payload);
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

  return (
    <InvestmentModalWrapper>
      <div>
        <span className="description">Please fill up the details to proceed.</span>
      </div>
      <Form form={form} onSubmit={onSubmit}>
        <div className="current-wallet">
          Current Wallet Balance:
          <span>${user?.wallet?.toLocaleString() || 0}</span>
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
              // {
              //   transform: value => parseFloat(value) > parseFloat(user?.wallet),

              //   // },
              //   message: 'You cannot exceed your Wallet Amount!.',
              // },
              {
                transform: value => value > assetValue - valueRaised,
                // transform: value => value  <= (assetValue - valueRaised),
                message: `The investment must be less or equal to the $${formatNumber(assetValue - valueRaised)}`,
              },
              // {
              //   pattern: /^.{0,8}$/,
              //   message: "Maximum Investment is 10,000,000",
              // },
            ]}>
            <Field />
          </Form.Item>
        </div>
        <div className="text-wrapper">
          You will own <span>{ownershipPercentage}%</span> of the asset, valued at a total of $
          {formatNumber(assetValue - valueRaised)}.
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
