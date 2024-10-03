import React, { useEffect } from 'react';
import { Wrapper } from './buyerloginSignupModal.style';
import Field from '../Field';
import { useGoogleLogin } from '@react-oauth/google';
import Form, { useForm } from '@/components/molecules/Form';
import Button from '../Button';
import { FcGoogle } from 'react-icons/fc';
import Facebook from '../../../_assets/facebook.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';

const BuyerLoginSignupModal = ({
  handleBuyerModal,
  handleLoginModal,
  handleSellerLoginModal,
  type,
  registrationData,
  setRegistrationData,
  setModal,
}) => {
  const { loading_user, onGoogleLogin } = useContextHook(AuthContext, v => ({
    loading_user: v.loading_user,
    onGoogleLogin: v.onGoogleLogin,
  }));
  const [form] = useForm();
  const router = useRouter();

  useEffect(() => {
    if (registrationData?.username) {
      form.setFieldsValue({
        username: registrationData?.username,
        email: registrationData?.email,
      });
    }
  }, [registrationData, form]);

  function handleSubmit(e) {
    let registerObj = {
      username: e.username?.trim(),
      email: e.email?.trim(),
    };
    let loginObj = {
      username: e.username?.trim(),
      password: e.password?.trim(),
    };

    if (type === 'Login As Buyer') {
      handleLoginModal({ ...loginObj, type: 'Buyer' });
    } else {
      // buyer Registration
      handleBuyerModal(registerObj);
      setRegistrationData(prev => ({
        ...prev,
        username: e.username?.trim(),
        email: e.email?.trim(),
      }));
    }
  }

  const googleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => {
      const { access_token } = tokenResponse;
      onGoogleLogin({ access_token, type: 'Buyer', action: type.trim().split(' ')[0] }, setModal);
    },
  });

  return (
    <Wrapper>
      <div>
        <span className="description">Please provide the details to proceed.</span>
      </div>
      <Form form={form} onSubmit={handleSubmit}>
        <div className="input-div">
          <Form.Item
            type="text"
            label="Username"
            name="username"
            rounded
            placeholder="alex123"
            onChange={e => {
              form.setFieldsValue({
                username: e.target.value.replace(/[A-Z]/g, char => char.toLowerCase()),
              });
            }}
            rules={[
              {
                required: true,
                message: 'Please enter username',
              },
              ...(type === 'Register As Buyer'
                ? [
                  {
                    pattern: /^.{3,}$/,
                    message: 'Minimum character length is 3',
                  },
                  {
                    pattern: /^(?!\d+$).*$/,
                    message: 'username cannot be only numbers',
                  },
                  {
                    pattern: /^(?![!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$).*$/,
                    message: 'username cannot consist only of special characters',
                  },
                  {
                    pattern: /^(?!.*\s)[a-zA-Z0-9_-]+$/,
                    message: 'No Special Characters and spaces are allowed, only hyphens and underscore are allowed.',
                  },
                  {
                    pattern: /^.{0,25}$/,
                    message: 'Maximum character length is 25',
                  },
                ]
                : []),
            ]}>
            <Field />
          </Form.Item>
          {type === 'Login As Buyer' ? (
            <Form.Item
              type="password"
              label="Password"
              name="password"
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
            <Button onClick={googleLogin} type="dropdown" rounded sm width="500" className="button">
              <FcGoogle size={20} />
              Continue with Google
            </Button>
            <Button disabled type="dropdown" rounded sm width="500" className="button">
              <Image src={Facebook} alt="Facebook" width={20} />
              Continue with Facebook
            </Button>
          </div>
        </div>
        <div className="continue-btn">
          <Button rounded md btntype="primary" width="170" loader={loading_user} htmlType={'submit'}>
            Continue
          </Button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default BuyerLoginSignupModal;
