import React, { useState } from "react";
import {
  Step,
  StepWrapper,
  StepWrapperContainar,
  StyledKycBuyer,
} from "../KYCBuyer/KycBuyer.styles";
import UploadFile from "@/components/molecules/UploadFile";
import Button from "../../Button";
import { useForm } from "@/components/molecules/Form";
import Form from "@/components/molecules/Form/Form";
import Select from "../../Select";
import Field from "../../Field";

const KycBuyerLevelTwo = () => {
  const [form] = useForm();

  const [step, setStep] = useState(1);
  const optionData = [{ label: "Buyer Level Two", value: "Buyer Level Two" }];
  return (
    <StyledKycBuyer>
      <div className="twoCol">
        <span className="kycdiscreption">
          Verification required. Please provide some details.
        </span>
        <StepWrapperContainar>
          <span className="stepStatus">Step {step} of 2</span>
          <StepWrapper $width={step}>
            <Step $bg={step >= 1} />
            <Step $bg={step == 2} />
          </StepWrapper>
        </StepWrapperContainar>
      </div>
      {step == 1 && (
        <Form form={form}>
          <Form.Item
            type="text"
            label="Email Address"
            name="email"
            // placeholder="Your Email or Username"
            rules={[
              { required: true },
              {
                pattern: /^.{0,256}$/,
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Select options={optionData} />
          </Form.Item>
          <div className="combineFields">
            <Form.Item
              type="text"
              label="Email Address"
              name="email"
              placeholder="Your Email or Username"
              rules={[
                { required: true },
                {
                  pattern: /^.{0,256}$/,
                  message: "Maximum Character Length is 256",
                },
              ]}
            >
              <Field options={optionData} />
            </Form.Item>
            <Form.Item
              type="text"
              label="Email Address"
              name="email"
              placeholder="Your Email or Username"
              rules={[
                { required: true },
                {
                  pattern: /^.{0,256}$/,
                  message: "Maximum Character Length is 256",
                },
              ]}
            >
              <Field options={optionData} />
            </Form.Item>
          </div>
        </Form>
      )}
      {step == 2 && (
        <>
          <label htmlFor="" className="fakelabel">
            Residence Proof
          </label>
          <div className="combineField">
            <UploadFile uploadTitle="Upload a copy of bills, bank statement" />
          </div>
          <Button rounded md btntype="green" width="214">
            Complete Verification
          </Button>
        </>
      )}
    </StyledKycBuyer>
  );
};

export default KycBuyerLevelTwo;
