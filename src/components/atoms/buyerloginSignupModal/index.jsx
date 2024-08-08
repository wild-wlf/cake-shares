import React, { useEffect } from 'react';
import { Wrapper } from './buyerloginSignupModal.style';
import Field from '../Field';
import Form, { useForm } from '@/components/molecules/Form';
import Button from '../Button';
import { FcGoogle } from 'react-icons/fc';
import Facebook from '../../../_assets/facebook.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

const BuyerLoginSignupModal = ({
  handleBuyerModal,
  handleLoginModal,
  handleSellerLoginModal,
  type,
  registrationData,
  setRegistrationData,
}) => {
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

    // if (e?.select_type.value === "company_seller") {
    //   router.push({
    //     pathname: "https://cake-admin.webevis.com/",
    //     query: { type: "company" },
    //   });
    // } else {
    //   router.push({
    //     pathname: "https://cake-admin.webevis.com/",
    //     query: { type: "seller" },
    //   });
    // }
    // handleSellerLoginModal();
    // setBuyerDetails((prev) => ({ ...prev, ...e }));
  }

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
            rules={[
              {
                required: true,
                message: 'Please enter username',
              },
              ...(type === 'Register As Buyer'
                ? [
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
                  ]
                : []),
            ]}>
            <Field maxLength={20} />
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
            <Button type="dropdown" rounded sm width="500" className="button">
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
            // loader={true}
            htmlType={'submit'}>
            Continue
          </Button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default BuyerLoginSignupModal;
