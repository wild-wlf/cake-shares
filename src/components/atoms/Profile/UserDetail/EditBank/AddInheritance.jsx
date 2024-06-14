import Button from '@/components/atoms/Button';
import Field from '@/components/atoms/Field';
import React, { useEffect, useState } from 'react';
import { StyledEditForm } from './EditForm.styles';
import Form from '@/components/molecules/Form/Form';
import { useForm } from '@/components/molecules/Form';
import { countries } from '@/components/Constant';
import Image from 'next/image';
import Select from '@/components/atoms/Select';
import ModalContainer from '@/components/atoms/ModalContainer';
import { MdModeEdit } from 'react-icons/md';
import Password from '../../../../../_assets/changePassword.svg';
import ChangePassword from '../ChangePassword';
import CenterModal from '@/components/atoms/Modal/CenterModal';
import { AuthContext } from '@/components/Context/authContext';
import { useContextHook } from 'use-context-hook';
import userService from '@/services/userService';
import Toast from '@/components/molecules/Toast';
const AddInheritance = ({ onClose }) => {
  const [arr, setArr] = useState(countries);
  const [changePassword, setChangePassword] = useState(false);
  const [form] = useForm();
  const { user, setPermission } = useContextHook(AuthContext, v => ({
    user: v.user,
    setPermission: v.setPermission,
  }));
  const [loading, setLoading] = useState(false);
  async function handelSubmit(e) {
    const obj = {
      type: 'inheritance',
      info: {
        userId: user?._id,
        name: e?.name?.trim(),
        passportNumber: e?.passportNumber?.trim(),
        country: e?.country?.value,
        email: e?.inheritanceEmail?.trim(),
      },
    };
    setLoading(true);
    try {
      await userService.addInheritance(obj);
      Toast({
        type: 'success',
        message: 'updated successfully',
      });
      setPermission(true);
      onClose();
    } catch (error) {
      Toast({
        type: 'error',
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <StyledEditForm form={form} onSubmit={handelSubmit}>
        <div className="combine-fields">
          <Form.Item
            type="text"
            label="Name of Person"
            name="name"
            sm
            rounded
            placeholder="Jhon Doe"
            rules={[
              {
                required: true,
                message: 'Person name is required',
              },
              {
                pattern: /^.{3,40}$/,
                message: 'Please enter a valid name',
              },
            ]}>
            <Field maxLength={40} />
          </Form.Item>
          <Form.Item
            type="number"
            label="Passport Number"
            name="passportNumber"
            sm
            rounded
            placeholder="123467894562339"
            rules={[
              {
                required: true,
                message: 'Passport number is required',
              },
              {
                pattern: /^[a-zA-Z0-9]{6,9}$/,
                message: 'Passport number must be between 6 and 9 characters long',
              },
            ]}>
            <Field maxLength={9} />
          </Form.Item>
          <Form.Item
            type="text"
            label="Country of Residence"
            name="country"
            sm
            rounded
            rules={[
              {
                required: true,
              },
            ]}>
            <Select options={arr} />
          </Form.Item>
          <Form.Item
            type="email"
            label="Email Address"
            name="inheritanceEmail"
            sm
            rounded
            placeholder="alex123@gmail.com"
            rules={[
              {
                required: true,
                message: 'Please enter email address',
              },
              {
                email: true,
              },
            ]}>
            <Field maxLength={40} />
          </Form.Item>
        </div>
        <Button rounded md btntype="primary" width="170" htmlType="submit" disabled={loading} loader={loading}>
          Add
        </Button>
      </StyledEditForm>
    </>
  );
};

export default AddInheritance;
