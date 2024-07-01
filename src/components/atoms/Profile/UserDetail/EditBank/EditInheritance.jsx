import Button from '@/components/atoms/Button';
import Field from '@/components/atoms/Field';
import React, { useEffect, useState } from 'react';
import { StyledEditForm } from './EditForm.styles';
import Form from '@/components/molecules/Form/Form';
import { useForm } from '@/components/molecules/Form';
import userService from '@/services/userService';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import { countries } from '@/components/Constant';
import Toast from '@/components/molecules/Toast';
import Select from '@/components/atoms/Select';

const EditInheritance = ({ selectedItem, userData, onClose }) => {
  const [arr, setArr] = useState(countries);
  const { setPermission } = useContextHook(AuthContext, v => ({
    setPermission: v.setPermission,
  }));
  const [loding, setLoding] = useState(false);
  const [form] = useForm();
  async function handelSubmit(e) {
    const obj = {
      type: 'inheritance',
      info: {
        userId: userData?._id,
        name: e?.name,
        passportNumber: e?.passportNumber,
        country: e?.country?.value,
        email: e?.inheritanceEmail?.trim(),
      },
    };
    setLoding(true);

    try {
      await userService.update(obj, selectedItem._id);
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
      setLoding(false);
    }
  }
  useEffect(() => {
    const country = countries.find(ele => ele.value === selectedItem?.country);
    form.setFieldsValue({
      name: selectedItem?.name,
      passportNumber: selectedItem?.passportNumber,
      country: country || { value: '', label: '' },
      inheritanceEmail: selectedItem?.email,
    });
  }, []);
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
                pattern: /^.{0,40}$/,
                message: 'Maximum Character Length is 256',
              },
            ]}>
            <Field />
          </Form.Item>
          <Form.Item
            type="text"
            label="Passport Number"
            name="passportNumber"
            sm
            rounded
            placeholder="123467894562339"
            rules={[
              { required: true },
              {
                pattern: /^.{0,40}$/,
                message: 'Maximum Character Length is 256',
              },
            ]}>
            <Field />
          </Form.Item>
          <Form.Item
            type="text"
            label="Country of Residence"
            name="country"
            sm
            rounded
            options={arr}
            rules={[
              {
                required: true,
              },
            ]}>
            <Select />
          </Form.Item>
          <Form.Item
            type="email"
            label="Email Address"
            name="inheritanceEmail"
            disabled={selectedItem?.email}
            sm
            rounded
            placeholder="alex123@gmail.com"
            rules={[
              {
                required: true,
                message: 'Please enter email address',
              },
              {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                message: 'Maximum Character Length is 256',
              },
            ]}>
            <Field maxLength={40} />
          </Form.Item>
        </div>
        <Button rounded md btntype="primary" width="170" htmlType="submit">
          Update
        </Button>
      </StyledEditForm>
    </>
  );
};

export default EditInheritance;
