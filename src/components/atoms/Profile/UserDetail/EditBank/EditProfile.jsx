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
import userService from '@/services/userService';
import Toast from '@/components/molecules/Toast';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import { convertDateToISO } from '@/helpers/common';
import { checkAge, convertToFormData } from '@/helpers/common';

const EditProfile = ({ personalInfo, onClose }) => {
  const [arr, setArr] = useState(countries);
  const [loading, setLoading] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [dob, setDob] = useState(
    `${personalInfo?.dob.slice(6, 10)}-${personalInfo?.dob.slice(3, 5)}-${personalInfo?.dob.slice(0, 2)}`,
  );

  const [form] = useForm();
  const { setPermission } = useContextHook(AuthContext, v => ({
    setPermission: v.setPermission,
  }));
  function handelChange(value = 'PK') {
    const newArr = arr.map((elem, index) => ({
      ...elem,
      label: (
        <div key={index} className="countrySelect">
          <figure>
            <Image
              src={`https://flagsapi.com/${elem.value}/shiny/48.png`}
              width={48}
              height={48}
              alt={`Flag of ${elem.value}`}
            />
          </figure>
          {elem.label}
        </div>
      ),
    }));
    setArr(newArr);
  }
  useEffect(() => {
    handelChange();
  }, []);
  useEffect(() => {
    const country = countries.find(ele => ele.value === personalInfo?.country);
    form.setFieldsValue({
      fullName: personalInfo?.fullName,
      username: personalInfo?.username,
      email: personalInfo?.email,
      dob: personalInfo?.dob,
      country: country || { value: '', label: '' },
    });
  }, []);
  async function handelSubmit(e) {
    setLoading(true);
    const obj = {
      type: 'personal',
      info: {
        fullName: e.fullName,
        username: e.username,
        email: e.email,
        country: e.country.value,
        dob: e.dob,
      },
    };
    try {
      await userService.update(obj, personalInfo.Id);
      setPermission(true);
      onClose();
      Toast({
        type: 'success',
        message: 'Profile updated successfully',
      });
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
      <CenterModal open={changePassword} setOpen={setChangePassword} width={663} title="Change Password">
        <ChangePassword />
      </CenterModal>
      <StyledEditForm form={form} onSubmit={handelSubmit}>
        <div className="combine-fields">
          <Form.Item
            type="text"
            label="Full Name"
            name="fullName"
            sm
            rounded
            placeholder="Alex Mertiz"
            rules={[
              { required: true, message: 'Please enter Full Name' },
              {
                pattern: /^.{3,40}$/,
                message: 'Please enter a valid full name',
              },
            ]}>
            <Field maxLength={40} />
          </Form.Item>
          <Form.Item type="text" label="Username" name="username" sm disabled rounded placeholder="alex123">
            <Field maxLength={20} />
          </Form.Item>
          <Form.Item
            type="text"
            label="Email Address"
            name="email"
            sm
            rounded
            disabled
            placeholder="alex123@gmail.com"
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
            label="Country"
            name="country"
            sm
            rounded
            placeholder="Select"
            options={arr}
            rules={[{ required: true }]}>
            <Select />
          </Form.Item>
          <Form.Item
            type="date"
            label="Birthdate (D.O.B)"
            name="dob"
            sm
            rounded
            value={dob}
            onChange={e => {
              setDob(e[0]);
              form.setFieldsValue({
                dob: e[0],
              });
            }}
            rules={[
              { required: true, message: 'Birthdate is required' },
              {
                transform: value => new Date(value) > new Date(),
                message: 'DOB cannot be in the future',
              },
              {
                transform: value => checkAge(value) === false,
                message: 'You must be at least 18 years old.',
              },
            ]}>
            <Field />
          </Form.Item>
        </div>

        <strong className="fake-label" onClick={() => setChangePassword(!changePassword)}>
          Change Password!
          <Image src={Password} alt="changePassword" />
        </strong>

        <Button rounded md btntype="primary" width="170" htmlType="submit" disabled={loading} loader={loading}>
          Save Changes
        </Button>
      </StyledEditForm>
    </>
  );
};

export default EditProfile;
