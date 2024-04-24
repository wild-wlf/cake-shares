import React from "react";
import { Wrapper } from "./loginSignupModal.style";
import Field from "../Field";
import Form, { useForm } from "@/components/molecules/Form";
import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import Facebook from "../../../_assets/facebook.svg";
import Image from "next/image";

const LoginSignupModal = ({ handleBuyerModal }) => {
  const [form] = useForm();

  return (
    <Wrapper>
      <div>
        <span className="description">
          Please provide the details to proceed.
        </span>
      </div>
      <Form form={form}>
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
                pattern: /^.{0,40}$/,
                required: true,
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
                pattern: /^.{0,256}$/,
                required: true,
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
            btntype="green"
            width="170"
            onClick={handleBuyerModal}
            htmlType="submit"
          >
            Continue
          </Button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default LoginSignupModal;
