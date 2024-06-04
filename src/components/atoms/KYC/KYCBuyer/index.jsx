import React, { useState } from 'react';
import { StyledKycBuyer } from './KycBuyer.styles';
import Button from '../../Button';
import Field from '../../Field';
import Form, { useForm } from '@/components/molecules/Form';
import kycService from '@/services/kycService';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/components/Context/authContext';
import Toast from '@/components/molecules/Toast';

const KycBuyerLevelOne = ({ setOpen, setKycLevel }) => {
  const { user, setPermission } = useContextHook(AuthContext, v => ({
    user: v.user,
    setPermission: v.setPermission,
  }));
  const [isLoading, setIsLoading] = useState(false);
  const [form] = useForm();

  const onSubmit = async data => {
    const { passportImageFront, passportImageBack } = data;
    try {
      setIsLoading(true);
      const payload = {
        userId: user?._id,
        kycRequestLevel: 1,
        passportImageFront,
        passportImageBack,
      };
      const formDataToSend = new FormData();
      Object.keys(payload).forEach(key => {
        formDataToSend.append(key, payload[key]);
      });
      await kycService.requestKyc(formDataToSend);
      Toast({
        type: 'success',
        message: `KYC for Level 1 Requested Successfully!`,
      });
      setOpen(false);
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
    <StyledKycBuyer>
      <Form form={form} onSubmit={onSubmit}>
        <span className="kycdiscreption">Upgrade to KYC Level 1</span>
        <div className="combineField">
          <Form.Item
            rounded
            name="passportImageFront"
            rules={[{ required: true, message: 'Please Enter Front Side of Passport Image!' }]}>
            <Field
              type="file"
              accept="image/jpeg, image/jpg, image/png, application/pdf"
              uploadTitle="Upload Front Side of Passport"
              onChange={e => console.log(e)}
            />
          </Form.Item>
          <Form.Item
            rounded
            name="passportImageBack"
            rules={[{ required: true, message: 'Please Enter Back Side of Passport Image!' }]}>
            <Field
              type="file"
              accept="image/jpeg, image/jpg, image/png, application/pdf"
              uploadTitle="Upload Back Side of Passport"
              onChange={e => console.log(e)}
              id="back"
            />
          </Form.Item>
        </div>
        <Button rounded md btntype="primary" loader={isLoading} width="214" htmlType="submit">
          Complete Verification
        </Button>
      </Form>
    </StyledKycBuyer>
  );
};

export default KycBuyerLevelOne;
