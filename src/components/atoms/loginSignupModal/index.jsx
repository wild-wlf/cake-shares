import React from "react";
import { Wrapper } from "./loginSignupModal.style";
import Field from "../Field";
import Form, { useForm } from "@/components/molecules/Form";
import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import Facebook from "../../../_assets/facebook.svg";
import Image from "next/image";
import Select from "../Select";

const LoginSignupModal = ({
  handleRegisterModal,
  handleBuyerModal,
  handleSellerLoginModal,
  handleSellerRegisterModal,
  type,
}) => {
  const [form] = useForm();
  return (
    <Wrapper>
      <div>
        <span className="description">
          Please provide the details to proceed.
        </span>
      </div>
      <Form form={form}>
        {type === "Register As Seller" ? (
          <div>
            <Form.Item
              type="text"
              label="Seller Type"
              name="seller_type"
              sm
              rounded
              placeholder="Select Type"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                options={[
                  { label: "Individual Seller", value: "indiviual_seller" },
                  { label: "Company Seller", value: "company_seller" },
                ]}
              />
            </Form.Item>
          </div>
        ) : type === "Seller" ? (
          <div>
            <Form.Item
              type="text"
              label="Seller Type"
              name="name"
              sm
              rounded
              placeholder="Select Type"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                options={[
                  { label: "Individual Seller", value: "indiviual_seller" },
                  { label: "Company Seller", value: "company_seller" },
                ]}
              />
            </Form.Item>
          </div>
        ) : (
          <></>
        )}
        <div className="input-div">
          <Form.Item
            type="text"
            label="Username"
            name="name"
            sm
            rounded
            placeholder="Alex123"
            rules={[
              {
                required: true,
              },
              {
                pattern: /^.{0,40}$/,
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Field />
          </Form.Item>
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
              },
              {
                pattern: /^.{0,256}$/,
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Field />
          </Form.Item>
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
              type="dropdown"
              rounded
              sm
              width="500"
              onClick={() => setCountryBox(!countryBox)}
              className="button"
            >
              <FcGoogle size={20} />
              Continue with Google
            </Button>
            <Button
              type="dropdown"
              rounded
              sm
              width="500"
              onClick={() => setCountryBox(!countryBox)}
              className="button"
            >
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
            onClick={
              type === "Seller"
                ? handleSellerLoginModal
                : type === "Register As Seller"
                ? handleSellerRegisterModal
                : handleBuyerModal
            }
            // htmlType="submit"
          >
            Continue
          </Button>
        </div>
        {type === "Seller" ? (
          <div className="register">
            Don&apos;t have an account?{" "}
            <span onClick={handleRegisterModal}> Register</span>
          </div>
        ) : (
          <></>
        )}
      </Form>
    </Wrapper>
  );
};

export default LoginSignupModal;
