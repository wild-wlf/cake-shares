import React, { useEffect, useState } from 'react';
import Button from '@/components/atoms/Button';
import Field from '@/components/atoms/Field';
import { useForm } from '@/components/molecules/Form';
import { StyledEditForm } from './EditForm.styles';
import Form from '@/components/molecules/Form/Form';
import userService from '@/services/userService';
import Toast from '@/components/molecules/Toast';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';

const EditBank = ({ bankInfo, onClose }) => {
  const { setPermission, user } = useContextHook(AuthContext, v => ({
    setPermission: v.setPermission,
    user: v.user,
  }));

  const [loading, setloading] = useState(false);
  const [form] = useForm();

  async function handelSubmit(e) {
    setloading(true);

    let bankPayload = {
      bankName: e?.bankName?.trim(),
      iban: e?.iban?.trim(),
      swiftBicNumber: e?.swiftBicNumber?.trim(),
      // userId: e?.userId?.trim(),
    };

    try {
      await userService.updateBankInfo(user?.bank?._id, bankPayload);

      Toast({
        type: 'success',
        message: 'Bank Information Updated Successfully!',
      });
      setloading(false);
      setPermission(true);
      onClose();
    } catch (error) {
      Toast({
        type: 'error',
        message: error.message,
      });
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
    if (bankInfo && Object.keys(bankInfo)?.length > 0) {
      form.setFieldsValue({
        bankName: bankInfo.bankName,
        iban: bankInfo.iban,
        swiftBicNumber: bankInfo.swiftBicNumber,
        // userId: bankInfo.userId,
      });
    }
  }, []);

  return (
    <StyledEditForm form={form} onSubmit={handelSubmit}>
      <div className="combine-fields">
        <Form.Item
          type="text"
          label="Bank Name"
          name="bankName"
          sm
          rounded
          placeholder="Bank of America"
          rules={[
            {
              required: true,
              message: 'Please enter Bank Name',
            },
            {
              pattern: /^.{3,30}$/,
              message: 'Please enter a valid Bank Name',
            },
          ]}>
          <Field maxLength={30} />
        </Form.Item>
        <Form.Item
          type="text"
          label="IBAN"
          name="iban"
          sm
          rounded
          placeholder="PK033310084246213"
          rules={[
            {
              required: true,
              message: 'Please enter IBAN number',
            },
            {
              pattern: /^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/,
              message: 'Please enter a valid IBAN number',
            },
          ]}>
          <Field maxLength={30} />
        </Form.Item>
        <Form.Item
          type="text"
          label="SWIFT / BIC Number"
          name="swiftBicNumber"
          sm
          rounded
          placeholder="ABCDEF12"
          rules={[
            {
              required: true,
              message: 'Please enter SWIFT / BIC Number',
            },
            {
              pattern: /^[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?$/,
              message: 'Invalid SWIFT/BIC format',
            },
          ]}>
          <Field maxLength={11} />
        </Form.Item>
        {/* <Form.Item
          type="text"
          label="User ID"
          name="userId"
          sm
          rounded
          placeholder="12345678"
          rules={[
            {
              required: true,
              message: 'Please enter User ID',
            },
            {
              pattern: /^[a-zA-Z0-9_-]{8,40}$/,
              message: 'User ID must be between 8 and 40 characters long',
            },
          ]}>
          <Field maxLength={40} />
        </Form.Item> */}
      </div>

      <Button rounded md btntype="primary" width="170" htmlType="submit" disabled={loading} loader={loading}>
        Save Changes
      </Button>
    </StyledEditForm>
  );
};

export default EditBank;
