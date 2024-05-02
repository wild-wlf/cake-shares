import React from "react";
import { InvestmentSuccessWrapper } from "./InvestmentSuccesModal.style";

const InvestmentSuccesModal = () => {
  return (
    <InvestmentSuccessWrapper>
      <span className="title">Investment Successful!</span>
      <div className="desc">
        Congratulations! Your purchase of <span>0.36%</span> shares has been
        completed successfully. You can view them in the &quot;Assets&quot;
        section of your profile.
      </div>
    </InvestmentSuccessWrapper>
  );
};

export default InvestmentSuccesModal;
