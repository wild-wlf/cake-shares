import React, { useContext, useEffect, useState } from 'react';
import { Wrapper } from './loginSignupModal.style';
import Field from '../Field';
import { useGoogleLogin } from '@react-oauth/google';
import Form, { useForm } from '@/components/molecules/Form';
import Button from '../Button';
import { FcGoogle } from 'react-icons/fc';
import Facebook from '../../../_assets/facebook.svg';
import Image from 'next/image';
import Select from '../Select';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';

let data = [
  { label: 'Individual Seller', value: 'Individual' },
  { label: 'Company Seller', value: 'Company' },
];

const LoginSignupModal = ({
  handleRegisterModal,
  handleSellerLoginModal,
  handleSellerRegisterModal,
  registrationData,
  setRegistrationData,
  type,
  setModal,
}) => {
  const { loading_user, onGoogleLogin } = useContextHook(AuthContext, v => ({
    loading_user: v.loading_user,
    onGoogleLogin: v.onGoogleLogin,
  }));
  const [form] = useForm();
  const [state, setState] = useState();

  useEffect(() => {
    if (registrationData?.username) {
      const sellertype = data?.find(ele => ele.value === registrationData?.sellerType);
      form.setFieldsValue({
        username: registrationData?.username,
        email: registrationData?.email,
        sellerType: sellertype || { value: '', label: '' },
      });
    }
  }, [registrationData, form]);

  function handleSubmit(e) {
    const obj = {
      username: e.username?.trim(),
      email: e.email?.trim(),
      sellerType: e.sellerType?.value,
    };

    const loginObj = {
      username: e.username?.trim(),
      password: e.password?.trim(),
    };

    if (type === 'Login As Seller') {
      handleSellerLoginModal({ ...loginObj, type: 'Seller' });
    } else if (type === 'Register As Seller') {
      handleSellerRegisterModal(obj);
      setRegistrationData(prev => ({
        ...prev,
        username: e.username?.trim(),
        email: e.email?.trim(),
        sellerType: e.sellerType?.value,
      }));
    }
  }

  const googleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => {
      const { access_token } = tokenResponse;
      onGoogleLogin(
        { access_token, type: 'Seller', sellerType: state?.sellerType?.value, action: type.trim().split(' ')[0] },
        setModal,
      );
    },
  });

  useEffect(() => {
    if (state?.sellerType) {
      form.removeFieldError('discount_code');
    }
  }, [state?.sellerType]);

  return (
    <Wrapper>
      <div>
        <span className="description">Please provide the details to proceed.</span>
      </div>
      <Form form={form} onSubmit={handleSubmit} onTouched={_ => setState(__ => ({ ...__, ..._ }))}>
        {type === 'Register As Seller' && (
          <div>
            <Form.Item
              type="text"
              label="Seller Type"
              name="sellerType"
              sm
              rounded
              options={data}
              rules={[
                {
                  required: true,
                  message: 'Please enter a valid Seller Type',
                },
              ]}>
              <Select />
            </Form.Item>
          </div>
        )}
        <div className="input-div">
          <Form.Item
            type="text"
            label="Username"
            name="username"
            sm
            rounded
            onChange={e => {
              form.setFieldsValue({
                username: e.target.value.replace(/[A-Z]/g, char => char.toLowerCase()),
              });
            }}
            placeholder="alex123"
            rules={[
              {
                required: true,
                message: 'Please enter username',
              },
              ...(type === 'Register As Seller'
                ? [
                    {
                      pattern: /^.{3,}$/,
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
                  ]
                : []),
            ]}>
            <Field />
          </Form.Item>
          {type === 'Login As Seller' ? (
            <Form.Item
              type="password"
              label="Password"
              name="password"
              sm
              rounded
              placeholder="***********"
              rules={[
                {
                  required: true,
                  message: 'Password is required',
                },
              ]}>
              <Field maxLength={64} />
            </Form.Item>
          ) : (
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
                  // pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                  // message: 'Please enter a valid email address',
                  email: true,
                },
              ]}>
              <Field maxLength={40} />
            </Form.Item>
          )}
        </div>
        <div className="other-section">
          <div className="hr">
            <hr />
          </div>
          <div>
            <span>Or</span>
          </div>
          <div className="hr">
            <hr />
          </div>
        </div>
        <div className="socialbtns">
          <div>
            <Button
              onClick={() => {
                if (!state?.sellerType && type !== 'Login As Seller')
                  form.setFieldsError({
                    sellerType: { message: 'Please enter a valid Seller Type!' },
                  });
                else googleLogin();
              }}
              type="dropdown"
              rounded
              sm
              width="500"
              className="button">
              <FcGoogle size={20} />
              Continue with Google
            </Button>
            <Button type="dropdown" rounded sm width="500" className="button">
              <Image src={Facebook} alt="Facebook" width={20} />
              Continue with Facebook
            </Button>
          </div>
        </div>
        <div className="continue-btn">
          <Button
            rounded
            md
            btntype="primary"
            width="170"
            // onClick={
            //   type === "Login As Seller"
            //     ? handleSellerLoginModal
            //     : type === "Register As Seller"
            //     ? handleSellerRegisterModal
            //     : handleBuyerModal
            // }
            // htmlType={type === "Login As Seller" ? "submit" : "button"}
            htmlType={'submit'}
            loader={loading_user}>
            Continue
          </Button>
        </div>
        {type === 'Login As Seller' ? (
          <div className="register">
            Don&apos;t have an account? <span onClick={handleRegisterModal}> Register</span>
          </div>
        ) : (
          <></>
        )}
      </Form>
    </Wrapper>
  );
};

export default LoginSignupModal;
