import React from "react";
import { Wrapper } from "./createPasswordModal.style";
import Field from "../Field";
import Form, { useForm } from "@/components/molecules/Form";
import Button from "../Button";
import Link from "next/link";
const CreatePasswordModal = ({
  createPasswordModal,
  handleCompleteRegistration,
}) => {
  const [form] = useForm();

  return (
    <Wrapper>
      <span className="description">
        Add a profile picture and create a password to secure your account.
      </span>
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
            type="password"
            label="Confirm Password"
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
        </div>
        <div className="btnWrapper">
          <Button
            rounded
            md
            btntype="white-blue"
            width="170"
            htmlType="submit"
            className="button"
            onClick={handleCompleteRegistration}
          >
            Complete Registration
          </Button>
          <Link href={"/"}>
            <Button
              rounded
              md
              btntype="primary"
              width="170"
              htmlType="submit"
              className="button"
              onClick={createPasswordModal}
            >
              I&apos;ll do later
            </Button>
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default CreatePasswordModal;
