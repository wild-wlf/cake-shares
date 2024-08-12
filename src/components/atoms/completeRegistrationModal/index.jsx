import React, { useContext, useEffect, useState } from 'react';
import { Wrapper } from './completeRegistrationModal.style';
import Field from '../Field';
import Form, { useForm } from '@/components/molecules/Form';
import Button from '../Button';
import Select from '../Select';
import Image from 'next/image';
import { countries } from '@/components/Constant';
import UploadImg from '@/components/molecules/UploadImg';
import { KycContext } from '@/context/KycContext';
import { UserContext } from '@/context/UserContext';
import userService from '@/services/userService';
import { checkAge, convertToFormData } from '@/helpers/common';
import Toast from '@/components/molecules/Toast';
import { IoIosArrowRoundBack } from 'react-icons/io';

const CompleteRegistrationModal = ({ handleRegistration, setCompleteRegistrationModal, setPasswordModal }) => {
  const { kycLevel, setKycLevel, checkKycLevel } = useContext(KycContext);
  const { buyerRegistrationData } = useContext(UserContext);

  const [arr, setArr] = useState(countries);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');
  const [form] = useForm();

  function handelChange(value = 'PK') {
    const newArr = arr.map((elem, index) => ({
      ...elem,
      label: (
        <div key={index} className="countrySelect">
          <figure>
            <Image
              src={`https://countryflagsapi.netlify.app/flag/${elem.value}.svg`}
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
    form.setFieldsValue({
      username: buyerRegistrationData.username,
      email: buyerRegistrationData?.email,
    });
    handelChange();
  }, []);

  const handleSubmit = async e => {
    setLoading(true);
    let obj = {
      profilePicture: image,
      type: buyerRegistrationData.type,
      password: buyerRegistrationData.password,
      dob: e.dob,
      email: e.email?.trim(),
      fullName: e.name?.trim(),
      username: e.username?.trim(),
      country: e.select.value,
      bankInfo: {
        bankName: e.bank_bank_name?.trim(),
        iban: e.bank_iban_number?.trim(),
        swiftBicNumber: e.bic_number?.trim(),
        userId: e.user_id?.trim(),
      },
      inheritanceInfo: {
        name: e.person_name?.trim(),
        passportNumber: e.passport_number?.trim(),
        country: e.country.value,
        email: e.inheritanceEmail?.trim(),
      },
    };

    const formData = convertToFormData(obj);

    try {
      await userService.createUser(formData);
      Toast({
        type: 'success',
        message: 'User Registered Successfully!',
      });
      setLoading(false);
      handleRegistration();
    } catch (error) {
      setLoading(false);
      Toast({
        type: 'error',
        message: error.message,
      });
    }
  };
  return (
    <Wrapper>
      <div className="back-icon">
        <IoIosArrowRoundBack
          onClick={() => {
            setPasswordModal(true);
            setCompleteRegistrationModal(false);
          }}
          size={45}
        />
      </div>
      <Form form={form} onSubmit={handleSubmit}>
        <div className="personal-info">
          <h5>Personal Info:</h5>

          <div>
            <UploadImg onChange={e => setImage(e)} />
            <div className="input-div">
              <Form.Item
                type="text"
                label="Full Name"
                name="name"
                sm
                rounded
                placeholder="Alex Mertiz"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Full Name',
                  },
                  {
                    pattern: /^.{0,40}$/,
                    message: 'Maximum Character Length is 256',
                  },
                ]}>
                <Field maxLength={40} />
              </Form.Item>
              <Form.Item
                type="text"
                label="Username"
                name="username"
                sm
                rounded
                placeholder="alex123"
                rules={[
                  {
                    required: true,
                    message: 'Please enter username',
                  },
                  {
                    pattern: /^.{3,20}$/,
                    message: 'Minimum character length is 3',
                  },
                  {
                    pattern: /^(?!.*\s)[a-zA-Z0-9_-]+$/,
                    message:
                      'Please enter a valid username (no spaces, letters, numbers, underscores, and hyphens only)',
                  },
                  {
                    pattern: /^(?!\d+$).*$/,
                    message: 'Username cannot be only numbers',
                  },
                  {
                    pattern: /^(?![!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$).*$/,
                    message: 'Username cannot consist only of special characters',
                  },
                ]}>
                <Field maxLength={20} />
              </Form.Item>
            </div>
            <div className="input-div">
              <Form.Item
                type="text"
                label="Email Address"
                name="email"
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
              <Form.Item
                label="Country"
                name="select"
                rules={[
                  {
                    required: true,
                  },
                ]}>
                <Select options={arr} />
              </Form.Item>
            </div>
            <div className="DOB-div">
              <Form.Item
                type="date"
                label="Birthdate (D.O.B)"
                name="dob"
                sm
                rounded
                rules={[
                  {
                    required: true,
                    message: 'Please enter Date Of Birth',
                  },
                  {
                    transform: value => new Date(value) > new Date(),
                    message: 'DOB cannot be in the future',
                  },
                  {
                    transform: value => checkAge(value) === false,
                    message: 'Age must be 18',
                  },
                ]}>
                <Field />
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="bank-info">
          <h5>Bank Info:</h5>

          <div>
            <div className="input-div">
              <Form.Item
                type="text"
                label="Bank Name"
                name="bank_bank_name"
                sm
                rounded
                placeholder="Bank of Americe"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Bank Name',
                  },
                  // {
                  //   pattern: /^.{3,30}$/,
                  //   message: 'Please enter a valid Bank Name',
                  // },
                  {
                    pattern: /^.{3,30}$/,
                    message: 'Please enter a valid Bank Name 3 to 30 characters long',
                  },
                ]}>
                <Field maxLength={30} />
              </Form.Item>
              <Form.Item
                type="text"
                label="IBAN"
                name="bank_iban_number"
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
                    message: 'Enter a valid IBAN 2 letters, 2 digits, 11-30 alphanumeric characters',
                  },
                ]}>
                <Field maxLength={30} />
              </Form.Item>
            </div>
            <div className="input-div">
              <Form.Item
                type="text"
                label="SWIFT / BIC Number"
                name="bic_number"
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
              <Form.Item
                type="text"
                label="User ID"
                name="user_id"
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
              </Form.Item>
            </div>
          </div>
        </div>

        <div className="inheritance-info">
          <h5>Inheritance Info:</h5>

          <div>
            <div className="input-div">
              <Form.Item
                type="text"
                label="Name of Person"
                name="person_name"
                sm
                rounded
                placeholder="Logan Paulson"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Name of Person',
                  },
                  {
                    pattern: /^[a-zA-Z\s]*$/,
                    message: 'Only alphabets are allowed',
                  },
                  {
                    pattern: /^.{2,30}$/,
                    message: ' Name should be between 2 and 30 characters.',
                  },
                ]}>
                <Field maxLength={30} />
              </Form.Item>
              <Form.Item
                type="number"
                label="Passport Number"
                name="passport_number"
                sm
                rounded
                placeholder="123456789"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Passport Number',
                  },
                  {
                    pattern: /^[a-zA-Z0-9]{6,9}$/,
                    message: 'Passport number must be between 6 and 9 characters long',
                  },
                ]}>
                <Field maxLength={9} />
              </Form.Item>
            </div>
            <div className="input-div">
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
                <Select options={arr} menuPlacement="top" />
              </Form.Item>
              <Form.Item
                type="text"
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
          </div>
        </div>

        <Button rounded md btntype="primary" width="170" htmlType="submit" loader={loading}>
          Go To Home
        </Button>
      </Form>
    </Wrapper>
  );
};

export default CompleteRegistrationModal;
