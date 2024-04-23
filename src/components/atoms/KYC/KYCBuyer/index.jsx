import React from "react";
import { StyledKycBuyer } from "./KycBuyer.styles";
import UploadFile from "@/components/molecules/UploadFile";
import Button from "../../Button";

const KycBuyerLevelOne = () => {
  return (
    <StyledKycBuyer>
      <span className="kycdiscreption">Upgrade to KYC Level 1</span>
      <label htmlFor="" className="fakelabel">
        ID Proof
      </label>
      <div className="combineField">
        <UploadFile uploadTitle="Upload Front Side of Passport" />
        <UploadFile uploadTitle="Upload Front Side of Passport" />
      </div>
      <Button rounded md btntype="green" width="214">
        Complete Verification
      </Button>
    </StyledKycBuyer>
  );
};

export default KycBuyerLevelOne;
