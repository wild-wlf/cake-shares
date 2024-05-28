import React, { useState } from "react";
import { Wrapper } from "./createPasswordModal.style";
import Field from "../Field";
import Form, { useForm } from "@/components/molecules/Form";
import Button from "../Button";
import Link from "next/link";
import UploadImg from "@/components/molecules/UploadImg";
const CreatePasswordModal = ({
  createPasswordModal,
  handleCompleteRegistration,
  handleSellerPasswordModal,
  type,
}) => {
  const [submitForm, setsubmitForm] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [form] = useForm();
  const handleSubmit = (e) => {
    let password = e.new_password;
    if (submitForm === "complete") {
      // Complete Registration Scenerio
      handleCompleteRegistration({ password });
    } else if (submitForm === "later") {
      // I'll do later Scenerio

      createPasswordModal(password);
    } else if (submitForm === "finish") {
      handleSellerPasswordModal({ password, profilePicture });
    }
  };
  return (
    <Wrapper>
      <span className="description">
        Add a profile picture and create a password to secure your account.
      </span>
      <Form form={form} onSubmit={handleSubmit}>
        {type === "Register As Seller" ? (
          <div>
            <UploadImg onChange={(e) => setProfilePicture(e)} />
          </div>
        ) : (
          <></>
        )}
        <div className="input-div">
          <Form.Item
            type="password"
            label="New Password"
            name="new_password"
            sm
            rounded
            placeholder="***********"
            rules={[
              {
                required: true,
              },
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
            name="confirm_password"
            sm
            rounded
            placeholder="***********"
            rules={[
              {
                required: true,
              },
              {
                transform: (value) =>
                  value !== form.getFieldValue("new_password"),
                message: "The two passwords that you entered do not match!",
              },
            ]}
          >
            <Field />
          </Form.Item>
        </div>
        <div className="btnWrapper">
          {type === "Register As Seller" ? (
            <Button
              rounded
              md
              btntype="primary"
              width="170"
              htmlType="submit"
              className="button"
              onClick={() => setsubmitForm("finish")}
            >
              Finish!
            </Button>
          ) : (
            <>
              <Button
                rounded
                md
                btntype="white-blue"
                width="170"
                htmlType="submit"
                onClick={() => setsubmitForm("complete")}
                className="button"
              >
                Complete Registration
              </Button>
              <Button
                rounded
                md
                btntype="primary"
                width="170"
                htmlType="submit"
                className="button"
                onClick={() => setsubmitForm("later")}
              >
                I&apos;ll do later
              </Button>
            </>
          )}
        </div>
      </Form>
    </Wrapper>
  );
};

export default CreatePasswordModal;
