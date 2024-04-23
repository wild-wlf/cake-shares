import React, { useState } from "react";
import {
  Step,
  StepWrapper,
  StepWrapperContainar,
  StyledKycBuyer,
} from "../KYCBuyer/KycBuyer.styles";
import UploadFile from "@/components/molecules/UploadFile";
import Button from "../../Button";

const KycBuyerLevelTwo = () => {
  const [step, setStep] = useState(1);
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
      {step == 1 && <></>}
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
