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
import WebCam from "../../WebCam";

const KYCBuyerThree = () => {
  const [form] = useForm();

  const [step, setStep] = useState(1);
  const optionData = [{ label: "Buyer Level Two", value: "Buyer Level Two" }];
  return (
    <StyledKycBuyer>
      <div className="twoCol">
        <span className="kycdiscreption">Biometric Verification required.</span>
      </div>
      <label htmlFor="" className="fakelabel">
        Facial Recognition
      </label>
      <WebCam />
    </StyledKycBuyer>
  );
};

export default KYCBuyerThree;
