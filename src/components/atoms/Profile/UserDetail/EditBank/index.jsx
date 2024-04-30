import Button from "@/components/atoms/Button";
import Field from "@/components/atoms/Field";
import { useForm } from "@/components/molecules/Form";
import Form from "@/components/molecules/Form/Form";
import React from "react";

const EditBank = () => {
  const [form] = useForm();

  return (
    <div>
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
              Continue with Facebook
            </Button>
          </div>
        </div>
        <div className="continue-btn">
          <Button rounded md btntype="green" width="170" htmlType="submit">
            Continue
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditBank;
