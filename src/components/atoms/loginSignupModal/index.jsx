import React, { useContext } from 'react';
import { Wrapper } from './loginSignupModal.style';
import Field from '../Field';
import Form, { useForm } from '@/components/molecules/Form';
import Button from '../Button';
import { FcGoogle } from 'react-icons/fc';
import Facebook from '../../../_assets/facebook.svg';
import Image from 'next/image';
import Select from '../Select';
import { useRouter } from 'next/router';

const LoginSignupModal = ({ handleRegisterModal, handleSellerLoginModal, handleSellerRegisterModal, type }) => {
  const [form] = useForm();
  const router = useRouter();
  function handleSubmit(e) {
    const obj = {
      username: e.username?.trim(),
      email: e.email?.trim(),
    };
    const loginObj = {
      username: e.username?.trim(),
      password: e.password?.trim(),
    };

    if (type === 'Login As Seller') {
      handleSellerLoginModal({ ...loginObj, type: 'Seller' });
    } else if (type === 'Register As Seller') {
      handleSellerRegisterModal(obj);
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
        <div>
          <Form.Item
            type="text"
            label="Seller Type"
            name="sellerType"
            sm
            rounded
            placeholder="Select Type"
            rules={[
              {
                required: true,
                message: 'Please enter a valid Seller Type',
              },
            ]}>
            <Select
              options={[
                { label: 'Individual Seller', value: 'Individual' },
                { label: 'Company Seller', value: 'Company' },
              ]}
            />
          </Form.Item>
        </div>
        <div className="input-div">
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
                pattern: /^.{5,20}$/,
                message: 'Minimum character length is 5',
              },
              {
                pattern: /^(?!.*\s)[a-zA-Z0-9_-]+$/,
                message: 'Please enter a valid username (no spaces, letters, numbers, underscores, and hyphens only)',
              },
              {
                pattern: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9_-]+$/,
                message: 'Username must be a combination of characters and digits',
              },
            ]}>
            <Field maxLength={20} />
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
            htmlType={'submit'}>
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
