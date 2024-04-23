import React from "react";
import { Wrapper } from "./loginSignupModal.style";
import Field from "../Field";
import Form, { useForm } from "@/components/molecules/Form";
import Select from "../Select";

const LoginSignupModal = () => {
  const [form] = useForm();

  return (
    <Wrapper>
      <div>
        <span>Please provide the details to proceed.</span>
      </div>
      <Form form={form}>
        <div>
          <Form.Item
            type="text"
            label="Email Address"
            name="email"
            sm
            rounded
            placeholder="Your Email or Username"
            rules={[
              {
                required: true,
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Select />
          </Form.Item>
        </div>
      </Form>
    </Wrapper>
  );
};

export default LoginSignupModal;
