import React from "react";
import { InvestmentSuccessWrapper } from "./InvestmentSuccesModal.style";

const InvestmentSuccesModal = ({ ownershipPercentage }) => {
  return (
    <InvestmentSuccessWrapper>
      <span className="title">Investment Successful!</span>
      <div className="desc">
        Congratulations! Your purchase of <span>{ownershipPercentage}%</span>{" "}
        shares has been completed successfully. You can view them in the
        &quot;Assets&quot; section of your profile.
      </div>
    </InvestmentSuccessWrapper>
  );
};

export default InvestmentSuccesModal;
