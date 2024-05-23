import React from "react";
import { VerficationModalWrapper } from "./VerficationModal.style";
import Image from "next/image";
import VerificationIcon from "../../../_assets/verification.svg";

const VerficationModal = () => {
  return (
    <VerficationModalWrapper>
      <Image
        src={VerificationIcon}
        alt="VerificationIcon"
        className="VerificationIcon"
      />
      <span>
        Your request is currently being processed, and you will receive a
        notification within 48 hours.
      </span>
    </VerficationModalWrapper>
  );
};

export default VerficationModal;
