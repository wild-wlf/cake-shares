import React from "react";
import { Wrapper } from "./createPasswordModal.style";
import Field from "../Field";
import Form, { useForm } from "@/components/molecules/Form";
import Button from "../Button";
const CreatePasswordModal = () => {
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
            type="password"
            label="New Password"
            name="name"
            sm
            rounded
            placeholder="***********"
            rules={[
              {
                pattern: /^.{8,64}$/,
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
        <div className="continue-btn">
          <Button rounded md btntype="green" width="170" htmlType="submit">
            Continue
          </Button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default CreatePasswordModal;
